// api
const artistAPI = (() => {
  const getArtist = async (artistName) => {
    const url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`;

    let result = await fetch(url);
    result = await result.json();
    return result;
  };
  return {
    getArtist,
  };
})();

// View
const view = (() => {
  // dom attributes that will be modified
  const domStr = {
    input: ".nav__input",
    artistText: ".main--result-display-text",
    artistResults: ".main--result-display-content",
    artistAlbum: "artist__container",
  };

  // render
  const render = (domEl, htmlTemplate) => {
    domEl.innerHTML = htmlTemplate;
  };

  const addArtist = (artistList) => {
    let artistDisplay = "";
    artistList.forEach(({ artistName, collectionName, artworkUrl100, collectionID }) => {
      artistDisplay += `
      <div class='${domStr.artistAlbum}'>
        <img src='${artworkUrl100}' /><br>
        <center>${collectionName}</center>
      </div>
      `;
    });
    return artistDisplay;
  };

  return {
    domStr,
    render,
    addArtist,
  };
})();

// Model
const model = ((view) => {
  class State {
    _artistInput = "";
    _list = [];

    get artistInput() {
      return this._artistInput;
    }

    set artistInput(input) {
      this._artistInput = input;
      const artistInputEl = document.querySelector(view.domStr.input);
      artistInputEl.value = this._artistInput;
    }

    get list() {
      return this._list;
    }

    set list(json) {
      this._list = json;
      const artistResults = document.querySelector(view.domStr.artistResults);
      const template = view.addArtist(this._list.results);
      view.render(artistResults, template);
      return this._list;
    }
  }

  const getArtist = artistAPI.getArtist;
  return {
    State,
    getArtist,
  };
})(view);

// Controller
const controller = ((view, model) => {
  const state = new model.State();

  const inputAndTextListener = () => {
    const input = document.querySelector(view.domStr.input);
    input.addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        state.artistInput = e.target.value;
        const artistText = document.querySelector(view.domStr.artistText);
        state.list = await artistAPI.getArtist(state.artistInput);
        artistText.innerHTML = `There are <b>${state.list.resultCount}</b> entries for <b>${state.list.results[0].artistName}</b>`;
        state.artistInput = "";
      }
    });
  };

  const init = () => {
    inputAndTextListener();
  };

  return {
    init,
  };
})(view, model);

controller.init();
