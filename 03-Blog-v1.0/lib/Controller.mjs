import View from "./View.js";
import Model from "./Model.js";

import { getPosts } from "./api.js";

const Controller = ((View, Model) => {
  // initialize a new state
  const state = new Model.State();

  const loadMoreArticles = () => {
    state.setPageNo(state.pageNo + 1);
  };
  const addLoadMoreEventListener = () => {
    const loadBtn = document.querySelector(View.dom.loadMoreButton);
    loadBtn.addEventListener("click", () => {
      loadMoreArticles();
    });
  };

  const init = () => {
    /**
     * Get the first page of posts
     */
    getPosts(0).then((posts) => {
      // Remove loading div
      View.removeLoading();
      state.setPosts(posts);
      state.setPageNo(0);
    });

    addLoadMoreEventListener();
  };

  return { init };
})(View, Model);

Controller.init();

export default Controller;
