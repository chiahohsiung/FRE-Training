const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

// contentful client
const client = require("contentful").createClient({
  space: "rnmht6wsj5nl",
  accessToken: "4d5xqcG1YRb4GTSM2ZqK3wmEkEHwOQOeWhxgtpPgwPc",
});

module.exports = {
  getPosts: function (pageNo) {
    return client
      .getEntries({ content_type: "post" })
      .then(async (response) => {
        const posts = response.items.sort(function (a, b) {
          return new Date(b.fields.date) - new Date(a.fields.date);
        });
        posts.map((post) => {
          post.fields.body = documentToHtmlString(post.fields.body);
          post.fields.date = `${readableDate(post.fields.date)}`;
        });
        return posts.slice(pageNo * 10, (pageNo + 1) * 10);
      });
  },

  getSinglePost: async function (slug) {
    let post = await client.getEntries({
      "fields.slug": slug,
      content_type: "post",
    });
    console.log(post);
    post = post.items[0];
    post.fields.body = documentToHtmlString(post.fields.body);

    return post;
  },
};
function readableDate(dateString) {
  return new Date(dateString).toDateString();
}
