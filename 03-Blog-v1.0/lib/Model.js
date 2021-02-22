import View from "./View.js";
import { getPosts } from "./api.js";

const Model = ((View) => {
  class State {
    posts = [];
    // The page number of posts retrieved
    pageNo = 0;

    /**
     * gets posts
     */
    setPosts(posts) {
      this.posts = [...posts];
    }
    setPageNo(no) {
      const lastPage = this.pageNo;
      this.pageNo = no;
      const postsFrame = document.querySelector(View.dom.articlesFrame);
      const postsAsDomElements = View.renderPosts(
        this.posts.slice(this.pageNo * 10, (this.pageNo + 1) * 10)
      );
      View.appendElements(postsFrame, postsAsDomElements);
    }
  }
  return {
    State,
  };
})(View);

export default Model;
