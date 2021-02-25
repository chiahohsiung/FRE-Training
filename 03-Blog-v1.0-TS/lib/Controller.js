"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const View_1 = require("./View");
const Model_1 = require("./Model");
const api_1 = require("./api");
class Controller {
    // initialize a new state
    constructor(sth) {
        this.loadMoreArticles = (model) => {
            model.setPageNo(model.getPageNo() + 1);
        };
        this.addLoadMoreEventListener = () => {
            const loadBtn = document.querySelector(this.view.getDom().loadMoreButton);
            loadBtn.addEventListener("click", () => {
                this.loadMoreArticles(this.model);
            });
        };
        this.init = () => {
            const view = new View_1.default();
            const model = new Model_1.default(view);
            this.view = view;
            this.model = model;
            /**
             * Get the first page of posts
             */
            api_1.getPosts(0).then((results) => {
                let posts = [];
                results.forEach((post) => {
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
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map