import { Post } from "./Model";
export default class View {
    private dom;
    getDom: () => {
        articlesFrame: string;
        singlePost: string;
        loading: string;
        loadMoreButton: string;
    };
    constructor();
    /**
     * Remove the loading element when posts have loaded
     *
     */
    removeLoading: () => void;
    /**
     * Appends elements to a dom element
     */
    appendElements: (target: any, elements: any[]) => void;
    loadPost: (element: any) => void;
    renderPosts: (posts: Post[]) => HTMLDivElement[];
}
