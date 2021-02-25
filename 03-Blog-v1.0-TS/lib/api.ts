let prod = "https://laudebugs.tamaduni.org";
let dev = "http://localhost:4000";
let endpoint = prod;

export async function getPosts(pageNo) {
  const result = await fetch(`${endpoint}/allrenderedposts`);
  const data = await result.json();

  /**
   * Sort the posts by date
   */
  const posts = data.posts;
  posts.map((post) => {
    post.fields.date = `${readableDate(post.fields.date)}`;
  });
  return posts;
}

function readableDate(dateString) {
  return new Date(dateString).toDateString();
}
