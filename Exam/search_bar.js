const searchAPI = (() => {
  const baseUrl = 'https://itunes.apple.com';
  const searchPath = 'search';
  const searchParameters = {
    // term: "",
    media: "music",
    entity: "album",
    attribute: "artistTerm",
    limit: 500
  }

  


  const getAllResults = (keyword) => {
    let paramString = `term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log("fetching");
    console.log("there, ", keyword);
    console.log([[baseUrl, searchPath].join('/'), paramString].join('?'));
    fetch([[baseUrl, searchPath].join('/'), paramString].join('?'))
    .then((response) => response.json());
  }

  return { getAllResults };
})();


const View = (() => {
  const domString = {
    searchInput: "search-keyword",
    album_card: "album-card"
  };

  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const initAlbumsList = (albumArray) => {
    let template = '';
    albumArray.forEach( elem => {
      template += `
        <li>
          <div class="album-card">
            <div class="album-card__cover> <div>
            <div class="album-card__title> <div>
          </div>
        </li>
      `;
    })
  };

  return {
    domString,
    render,
    initAlbumsList
  }

})();

const Model = ((api, view) => {



  class Card {
    constructor(albumId, title, coverUrl) {
      this.albumId = albumId;
      this.title = title;
      this.coverUrl = coverUrl;
    }
  }

  class State {
    albumList = [];
    searchQuery = '';

  }

  const getSearchResult = (keyword) => {
    console.log("here: ", keyword);
    api.getAllResults(keyword);
  }

  return {
    State,
    getSearchResult
  }
})(searchAPI, View);


const AppController = ((view, model) => {
  const state = new model.State();
  const search = model.getSearchResult;

  const addListenerOnInput = () => {
    console.log("adding");
    const searchBarElem = document.querySelector('#' + view.domString.searchInput);
    searchBarElem.addEventListener('keyup', (event) => {
      console.log(event);
      if (event.key === 'q') {
        event.preventDefault();
        state.searchQuery = event.target.value;
        console.log(event.target.value);
        console.log(state.searchQuery);
        const resultList = search(state.searchQuery);
        // console.log(resultList);
      }
    });

  };

  const init = () => {
    console.log("init");
    addListenerOnInput();
  }

  return {
    init
  }
})(View, Model);

AppController.init();


