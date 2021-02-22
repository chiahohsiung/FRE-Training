$(document).ready(doSomething);

function doSomething() {
  // Load more articles button
  $("#more_articles").on("click", () => {
    loadMoreArticles();
  });
  $(window).scroll(activateUp);

  $("#up").on("click", scrollToTop);
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 700);
}
function activateUp() {
  let currentScroll = $(window).scrollTop();
  if (currentScroll >= 200) {
    $("#up").css("visibility", "visible");
  } else {
    $("#up").css("visibility", "hidden");
  }
}
async function loadMoreArticles() {
  let pageNo = $("#more_articles").attr("pageNo");
  let posts = await fetch(`/page/${pageNo}`);
  posts = await posts.json();

  posts.posts.map((post) => {
    createPost(post);
  });

  // Update the pageNo
  $("#more_articles").attr("pageNo", parseInt(pageNo) + 1);
}

function createPost(post) {
  let postsFrame = document.querySelector(".posts");

  let thisPost = document.createElement("div");
  thisPost.className = "blog_post_card";

  let postTitle = document.createElement("h2");
  postTitle.innerText = post.fields.title;

  let postImage = document.createElement("img");
  postImage.src = post.fields.feature_image.fields.file.url;

  let dateElement = document.createElement("small");
  dateElement.innerText = post.fields.date;

  let date = document.createElement("p");
  date.appendChild(dateElement);

  let link = document.createElement("a");

  link.href = `/${post.fields.slug}`;
  link.appendChild(postTitle);
  link.appendChild(date);
  link.appendChild(postImage);

  let tags = document.createElement("p");

  // Append the tags of the post
  post.fields.tags.map((tag) => {
    let newTag = document.createElement("span");
    newTag.innerText = `#${tag}`;
    tags.appendChild(newTag);
  });

  thisPost.appendChild(link);
  thisPost.appendChild(tags);

  // append the post to the posts frame
  postsFrame.appendChild(thisPost);
}
