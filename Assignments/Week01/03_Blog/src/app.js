const express = require("express");
const app = express();
const path = require("path");
const imageToBase64 = require("image-to-base64");
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

// contentful client
const client = require("contentful").createClient({
  space: "rnmht6wsj5nl",
  accessToken: "4d5xqcG1YRb4GTSM2ZqK3wmEkEHwOQOeWhxgtpPgwPc",
});

app.get("/", (req, res) => {
  client.getEntries({ content_type: "post" }).then(async (response) => {
    const posts = response.items.sort(function (a, b) {
      return new Date(b.fields.date) - new Date(a.fields.date);
    });
    const getPosts = await Promise.all(
      posts.map(async (post) => {
        let base64 = await imageToBase64(
          "https:" + post.fields.feature_image.fields.file.url
        ); // Image URL
        post.fields.body = documentToHtmlString(post.fields.body);
        post.fields.feature_image.fields.file.url =
          "data:image/jpeg;base64," + base64;
        return post;
      })
    );
    res.render("home", { posts: getPosts });
  });
});

app.get("/:post", async (req, res) => {
  let post = await client.getEntries({
    "fields.slug": req.params.post,
    content_type: "post",
  });
  post = post.items[0];
  let base64 = await imageToBase64(
    "https:" + post.fields.feature_image.fields.file.url
  ); // Image URL
  post.fields.body = documentToHtmlString(post.fields.body);
  // post.fields.feature_image.fields.file.url =
  //   "data:image/jpeg;base64," + base64;

  res.render("post", { post: post });
});

app.listen(3001);
