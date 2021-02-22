let prod = "https://laudebugs.tamaduni.org";
let dev = "http://localhost:4000";
let endpoint = prod;

export async function getPosts(pageNo) {
  const result = await fetch(`${endpoint}/allrenderedposts`);
  const data = await result.json();

  /**
   * Sort the posts by date
   */
  const posts = data.posts.sort(function (a, b) {
    return new Date(b.fields.date) - new Date(a.fields.date);
  });
  posts.map((post) => {
    post.fields.date = `${readableDate(post.fields.date)}`;
  });
  return posts;
}
export async function functiongetSinglePost(slug) {
  let post = await client.getEntries({
    "fields.slug": slug,
    content_type: "post",
  });
  console.log(post);
  post = post.items[0];
  post.fields.body = documentToHtmlString(post.fields.body);

  return post;
}
function readableDate(dateString) {
  return new Date(dateString).toDateString();
}
