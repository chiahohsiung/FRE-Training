import View from "./View";
export default class Model {
    constructor(view: View);
    private view;
    private posts;
    private pageNo;
    getPosts: () => Post[];
    setPageNo: (pageNo: number) => void;
    getPageNo: () => number;
    setPosts(posts: Post[]): void;
}
export interface Post {
    title: string;
    image: string;
    date: string;
    slug: string;
    tags: string[];
    body: string;
}
