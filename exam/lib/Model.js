import View from "./View.js";

const Model = ((view) => {
  // Define the state object
  class State {
    _data = [];

    setData(data) {
      console.log(data);
      this._data = [...data];
      let elements = view.createDomElements(data);
      // append dom elements
      const container = document.querySelector(view.dom.body);
      view.appendElements(container, elements);
    }
    getData() {
      return this._data;
    }
    // Define other state functions here
  }
  return {
    State,
  };
})(View);

export default Model;
