import Model from "./Model";
export declare class Controller {
    private model;
    private view;
    constructor(sth: string);
    loadMoreArticles: (model: Model) => void;
    addLoadMoreEventListener: () => void;
    init: () => void;
}
