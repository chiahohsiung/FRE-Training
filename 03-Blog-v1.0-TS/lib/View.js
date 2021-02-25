"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor() {
        this.dom = {
            articlesFrame: ".content",
            singlePost: ".single__post",
            loading: ".loading",
            loadMoreButton: ".load__more",
        };
        this.getDom = () => {
            return this.dom;
        };
        /**
         * Remove the loading element when posts have loaded
         *
         */
        this.removeLoading = () => {
            const loadingElement = document.querySelector(this.dom.loading);
            loadingElement.remove();
        };
        /**
         * Appends elements to a dom element
         */
        this.appendElements = (target, elements) => {
            elements.map((element) => {
                target.appendChild(element);
            });
        };
        this.loadPost = (element) => {
            let slug = $(element).attr("slug");
            console.log(slug);
            // TODO: Implement post page
        };
        this.renderPosts = (posts) => {
            console.log(posts);
            return posts.map((post) => {
                let thisPost = document.createElement("div");
                thisPost.className = "blog_post_card";
                $(thisPost).attr("slug", post.slug);
                let postTitle = document.createElement("h2");
                postTitle.innerText = post.title;
                let postImage = document.createElement("img");
                postImage.src = post.image;
                let dateElement = document.createElement("small");
                dateElement.innerText = post.date;
                let date = document.createElement("p");
                date.appendChild(dateElement);
                let link = document.createElement("a");
                link.appendChild(postTitle);
                link.appendChild(date);
                link.appendChild(postImage);
                let tags = document.createElement("p");
                // Append the tags of the post
                post.tags.map((tag) => {
                    let newTag = document.createElement("span");
                    newTag.innerText = `#${tag}`;
                    tags.appendChild(newTag);
                });
                thisPost.appendChild(link);
                thisPost.appendChild(tags);
                return thisPost;
            });
        };
    }
}
exports.default = View;
//# sourceMappingURL=View.js.map