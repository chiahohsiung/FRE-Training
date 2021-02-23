const searchAPI = (() => {
  const baseurl = "https://itunes.apple.com/search?";
  const rest_keys = "&media=music&entity=album&attribute=artistTerm&limit=500";

  const getAlbumByName = (name) =>
    fetch(baseurl + `term=\$\{${name}\}` + rest_keys).then((response) =>
      response.json()
    );

  return {
    getAlbumByName,
  };
})();

const View = (() => {
  const domString = {
    queryHeader: "query",
    searchInput: "search-input",
    resultSection: "result",
  };

  const renderHTML = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const renderText = (element, text) => {
    element.innerText = text;
  };

  const genCard = (arr) => {
    let template = "";
    arr.forEach((ele) => {
      template += `
                <div class="card">
                    <img class="albumCover" src="${ele.artworkUrl100}" alt="${ele.collectionId}">
                    <p class="albumInfo">${ele.collectionName}</p>
                </div>
            `;
    });
    return template;
  };

  return {
    domString,
    renderHTML,
    renderText,
    genCard,
  };
})();

const Model = ((api, view) => {
  class State {
    #query = "";
    #albums = [];
    #artist = "";

    get query() {
      return this.#query;
    }

    set query(text) {
      const element = document.querySelector("#" + view.domString.queryHeader);
      view.renderText(element, text);
    }

    get albums() {
      return this.#albums;
    }

    set albums(newlist) {
      this.#albums = newlist;
      const element = document.querySelector(
        "#" + view.domString.resultSection
      );
      const htmltmp = view.genCard(this.#albums);
      view.renderHTML(element, htmltmp);
    }

    get artist() {
      return this.#artist;
    }

    set artist(name) {
      this.#artist = name;
    }
  }

  const getAlbumByName = api.getAlbumByName;

  return {
    State,
    getAlbumByName,
  };
})(searchAPI, View);

const AppController = ((view, model) => {
  const state = new model.State();

  const addListenerOnInput = () => {
    const element = document.querySelector("#" + view.domString.searchInput);
    element.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && event.target.value.length > 0) {
        state.artist = event.target.value;
        model.getAlbumByName(state.artist).then((data) => {
          state.query = `${data.resultCount} results for "${state.artist}"`;
          state.albums = data.results;
        });
      }
    });
  };

  const init = () => {
    addListenerOnInput();
  };

  return {
    init,
  };
})(View, Model);

AppController.init();
