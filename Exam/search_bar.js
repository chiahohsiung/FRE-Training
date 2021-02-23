const searchAPI = (() => {
  const baseUrl = 'https://itunes.apple.com';
  const searchPath = 'search';

  const getAllResults = async (keyword) => {
    let paramString = `term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=500`;
    let queryUrl = [[baseUrl, searchPath].join('/'), paramString].join('?');
    return fetchJsonp(queryUrl, {
      method: 'GET',
      header: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => response.json());
  }

  return { getAllResults };
})();


const View = (() => {
  const domString = {
    searchInput: "search-keyword",
    album_card: "album-card",
    resultGallery: "result-gallery__list",
    resultInfo: "result-info__text"
  };

  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const resultGallery = document.querySelector('#' + domString.resultGallery);
  const resultInfo = document.querySelector('#' + domString.resultInfo);

  const populateAlbumsList = (albumArray, keyword) => {
    let template = '';
    albumArray.forEach( elem => {
      template += `
        <li>
          <div class="album-card" id="album-${elem.albumId}">
            <div class="album-card__cover">
              <img src="${elem.imgUrl}" alt="${elem.title}">
            </div>
            <div class="album-card__title">${elem.title}</div>
          </div>
        </li>
      `;
    });
    render(resultGallery, template);
    render(resultInfo, `${albumArray.length} results for "${keyword}"`)
  };

  return {
    domString,
    render,
    populateAlbumsList
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

  const getSearchResult = (keyword) => api.getAllResults(keyword);

  return {
    State,
    getSearchResult
  }
})(searchAPI, View);


const AppController = ((view, model) => {
  const state = new model.State();
  const search = model.getSearchResult;

  const addListenerOnInput = () => {
    const searchBarElem = document.querySelector('#' + view.domString.searchInput);
    searchBarElem.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        state.searchQuery = event.target.value;
        search(state.searchQuery)
          .then(json => {
            let albumArray = new Array();
            json.results.forEach(elem => {
              albumArray.push({ 
                imgUrl: elem["artworkUrl100"], 
                title: elem["collectionName"], 
                albumId: elem["collectionId"]
              });
            })
            view.populateAlbumsList(albumArray, state.searchQuery);
          });
      }
    });

  };

  const init = () => {
    addListenerOnInput();
  }

  return {
    init
  }
})(View, Model);

AppController.init();