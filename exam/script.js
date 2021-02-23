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
  // dom attributes taht will be modified
  const domStr = {
    input: ".nav__input",
    artistText: ".main--result-display-text",
    artistResults: ".main--result-display-content",
    artistAlbum: ".artist__container",
  };

  // render
  const render = (domEl, htmlTemplate) => {
    domEl.innerHTML = htmlTemplate;
  };

  const addArtist = (artistList) => {
    let artistDisplay = "";
    artistList.forEach(({ artistName, collectionName, artworkUrl100, collectionID }) => {
      artistDisplay.innerHTML += `
      <div class='${collectionID}'>
        <img src='${artworkUrl100}' /><br>
        <center>${collectionName}</center>
      </div>
      `;
    });
  };

  return {
    domStr,
    render,
    addArtist,
  };
})();

// Model
const model = ((view) => {
  // data we need: result count, name of artist, name of album, photo of album
  // extract relevant data

  // need to set the list
  class State {
    _artistList = [];
    _artistInput = "";

    get artistInput() {
      return this._artistInput;
    }

    set artistInput(input) {
      this._artistInput = input;
      const artistInputEl = document.querySelector(view.domStr.input);
      artistInputEl.value = this._artistInput;
    }

    get list() {
      return this.artistList;
    }

    set list(json) {
      this._artistList = json.results;
      const artistResults = document.querySelector(view.domString.artistResults);
      const template = view.inittodolsitTmp(this._artistList);
      view.render(artistResults, addArtist);
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
        state.artistList = [];

        const artistText = document.querySelector(view.domStr.artistText);
        state.artistList = await artistAPI.getArtist(state.artistInput);
        artistText.innerHTML = `There are <b>${state.artistList.resultCount}</b> entries for <b>${state.artistList.results[0].artistName}</b>`;
      }
      state.artistInput = "";
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
