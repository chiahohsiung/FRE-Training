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
    console.log("inside add artist");
    console.log("this is artistList", artistList);
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
    _list = [];
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
      console.log("checking set list");
      this._list = json.results;
      console.log("hitting the list inside state");
      console.log("this is the list", this._list);
      const artistResults = document.querySelector(view.domStr.artistResults);
      const template = view.addArtist(this._list);
      view.render(artistResults, template);
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
      console.log("hello");
      if (e.key === "Enter") {
        console.log(state.artistInput);
        state.artistInput = e.target.value;
        state.list = [];

        const artistText = document.querySelector(view.domStr.artistText);
        state.list = await artistAPI.getArtist(state.artistInput);
        console.log("what is the list here", state.list);
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
