import View from "./View.js";
import Model from "./Model.js";

import { getItunesData } from "./api.js";

const Controller = ((view, model) => {
  // Initialize the state
  const state = new model.State();

  // Define your event listeners here
  const searchBar = document.querySelector(View.dom.searchBarId);

  const performSearch = () => {
    let searchTerm = searchBar.value;

    let data = getItunesData(searchTerm);
    data.then((data) => {
      state.setData(data.results);
      const titleElement = document.querySelector(view.dom.title);
      const searchTitle = `${data.results.length} result${
        data.results.length !== 1 ? "s" : ""
      } for "${searchTerm}"`;
      view.setInnerText(titleElement, searchTitle);
    });
  };
  const addSearchEventListner = () => {
    searchBar.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        // Call the api
        performSearch();
      }
    });
  };

  const addSearchIconEventListener = () => {
    const icon = document.querySelector(view.dom.searchIcon);
    icon.addEventListener("click", () => {
      performSearch();
    });
  };
  const init = () => {
    // How are you initializing your document?
    // 1. Call an api to get data
    // 2. Add the date to the state
    // 3. Render the data accordingly
    // 4. Add necessary event listeners
    console.log("initializing controller");

    addSearchEventListner();
    addSearchIconEventListener();
  };
  return {
    init,
  };
})(View, Model);

Controller.init();

export default Controller;
