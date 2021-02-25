import View from "./View";
import { getPosts } from "./api";

export default class Model {
  constructor(view: View) {
    this.view = view;
  }
  private view: View;
  private posts: Post[] = [];
  private pageNo: number;

  public getPosts = (): Post[] => {
    return this.posts;
  };
  public setPageNo = (pageNo: number): void => {
    this.pageNo = pageNo;
    const postsFrame = document.querySelector(this.view.getDom().articlesFrame);
    const postsAsDomElements = this.view.renderPosts(
      this.posts.slice(this.pageNo * 10, (this.pageNo + 1) * 10)
    );
    this.view.appendElements(postsFrame, postsAsDomElements);
    $("div.blog_post_card").on("click", (e) =>
      this.view.loadPost(e.currentTarget)
    );
  };
  public getPageNo = (): number => {
    return this.pageNo;
  };
  setPosts(posts: Post[]): void {
    this.posts = posts;
  }
}
export interface Post {
  title: string;
  image: string;
  date: string;
  slug: string;
  tags: string[];
  body: string;
}
