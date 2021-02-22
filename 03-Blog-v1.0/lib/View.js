export default (function () {
  const dom = {
    articlesFrame: ".content",
    singlePost: ".single__post",
    loading: ".loading",
    loadMoreButton: ".load__more",
  };
  /**
   * Remove the loading element when posts have loaded
   *
   */
  const removeLoading = () => {
    const loadingElement = document.querySelector(dom.loading);
    loadingElement.remove();
  };
  /**
   * Appends elements to a dom element
   */
  const appendElements = (target, elements) => {
    console.log("ici");
    elements.map((element) => {
      target.appendChild(element);
    });
  };

  const renderPosts = (posts) => {
    return posts.map((post) => {
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

      link.href = `post.html?article=${post.fields.slug}`;
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

      return thisPost;
    });
  };
  return { dom, appendElements, renderPosts, removeLoading };
})();
