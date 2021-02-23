const searchAPI = (() => {
  const baseUrl = 'https://itunes.apple.com';
  const searchPath = 'search';
  // const searchParameters = {
  //   // term: "",
  //   media: "music",
  //   entity: "album",
  //   attribute: "artistTerm",
  //   limit: 500
  // }

  const getAllResults = async (keyword) => {
    let paramString = `term=${keyword}&media=music&entity=album&attribute=artistTerm&limit=500`;
    // console.log([[baseUrl, searchPath].join('/'), paramString].join('?'));
    let queryUrl = [[baseUrl, searchPath].join('/'), paramString].join('?');
    return fetch(queryUrl, {
      
    })
    .then((response) => response.json());
  }

  return { getAllResults };
})();


const View = (() => {
  const domString = {
    searchInput: "search-keyword",
    album_card: "album-card",
    resultGallery: "result-gallery__list"
  };

  const render = (element, htmlTemplate) => {
    element.innerHTML = htmlTemplate;
  };

  const resultGallery = document.querySelector('#' + domString.resultGallery);

  const populateAlbumsList = (albumArray) => {
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
    console.log("template: ", template);
    render(resultGallery, template);
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
      console.log(event);
      if (event.key === 'Enter') {
        event.preventDefault();
        state.searchQuery = event.target.value;
        search(state.searchQuery)
          .then(json => {
            let albumArray = new Array();
            // console.log("json: ", json);
            json.results.forEach(elem => {
              albumArray.push({ 
                imgUrl: elem["artworkUrl100"], 
                title: elem["collectionName"], 
                albumId: elem["collectionId"]
              });
            })
            console.log(albumArray);
            view.populateAlbumsList(albumArray);
          });
        // console.log(resultList);
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


