const express = require("express");
const app = express();
const path = require("path");
const helperFunctions = require("./helpers");

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  // get the first page
  let posts = await helperFunctions.getPosts(0);
  res.render("home", { posts: posts });
});

app.get("/:post", async (req, res) => {
  let slug = req.params.post;
  let post = await helperFunctions.getSinglePost(slug);
  res.render("post", { post: post });
});

app.get("/page/:no", async (req, res) => {
  let pageNo = parseInt(req.params.no);
  let posts = await helperFunctions.getPosts(pageNo);
  console.log(posts);
  res.json({ posts: posts });
});

app.listen(3000);
