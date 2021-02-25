import View from "./View";
import Model from "./Model";
import { Post } from "./Model";
import { getPosts } from "./api";

export class Controller {
  private model: Model;
  private view: View;
  // initialize a new state

  constructor(sth: string) {}
  public loadMoreArticles = (model: Model) => {
    model.setPageNo(model.getPageNo() + 1);
  };
  public addLoadMoreEventListener = () => {
    const loadBtn = document.querySelector(this.view.getDom().loadMoreButton);
    loadBtn.addEventListener("click", () => {
      this.loadMoreArticles(this.model);
    });
  };

  public init = () => {
    const view = new View();
    const model = new Model(view);
    this.view = view;
    this.model = model;
    /**
     * Get the first page of posts
     */
    getPosts(0).then((results) => {
      let posts = [];
      results.forEach((post): void => {
        let newPost = {
          title: post.fields.title,
          image: post.fields.feature_image.fields.file.url,
          date: post.fields.date,
          slug: post.fields.slug,
          tags: post.fields.tags,
          body: post.fields.body,
        };
        posts.push(newPost);
      });

      // Remove loading div
      this.view.removeLoading();
      this.model.setPosts(posts);
      this.model.setPageNo(0);
    });
    this.addLoadMoreEventListener();
  };
}
