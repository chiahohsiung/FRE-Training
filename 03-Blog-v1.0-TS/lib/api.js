"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
let prod = "https://laudebugs.tamaduni.org";
let dev = "http://localhost:4000";
let endpoint = prod;
function getPosts(pageNo) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch(`${endpoint}/allrenderedposts`);
        const data = yield result.json();
        /**
         * Sort the posts by date
         */
        const posts = data.posts;
        posts.map((post) => {
            post.fields.date = `${readableDate(post.fields.date)}`;
        });
        return posts;
    });
}
exports.getPosts = getPosts;
function readableDate(dateString) {
    return new Date(dateString).toDateString();
}
//# sourceMappingURL=api.js.map