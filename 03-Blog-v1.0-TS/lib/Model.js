"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(view) {
        this.posts = [];
        this.getPosts = () => {
            return this.posts;
        };
        this.setPageNo = (pageNo) => {
            this.pageNo = pageNo;
            const postsFrame = document.querySelector(this.view.getDom().articlesFrame);
            const postsAsDomElements = this.view.renderPosts(this.posts.slice(this.pageNo * 10, (this.pageNo + 1) * 10));
            this.view.appendElements(postsFrame, postsAsDomElements);
            $("div.blog_post_card").on("click", (e) => this.view.loadPost(e.currentTarget));
        };
        this.getPageNo = () => {
            return this.pageNo;
        };
        this.view = view;
    }
    setPosts(posts) {
        this.posts = posts;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map