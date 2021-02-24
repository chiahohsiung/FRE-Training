// MVC
const itunesAPI = (() => {
    const baseurl = 'https://itunes.apple.com/search?term=';

    const getAlbums = (artistName) => {
        let keyword = artistName;
        keyword += '&media=music&entity=album&attribute=artistTerm&limit=500';

        return fetch([baseurl, keyword].join(''))
            .then((response) => response.json());
    }
    return {
        getAlbums
    }
})();


const View = (() => { 
    const domString = {  
        header: 'header-container',
        statusText: "status-text",   
        itemList: "items",
        searchInput: 'search-input',
    }
    const render = (element, htmlTemplate) => {  
        element.innerHTML = htmlTemplate;   
    }

    const renderStatus = (element, text) => {
        element.innerText = text;
      };

    const initContentTmp = (contentArray) => { 
        let template = "";
        contentArray.forEach(ele => {  
            template += `
            <li class="item">
                <div class="img-container">
                    <img class="cover-img" src="${ele.artworkUrl100}">
                </div>
                <div class="title-container">
                    <p class="cover-info">${ele.collectionName}</p>
                </div>
            </li>
        `;
        });
        return template;
    }

    return {
        domString,
        initContentTmp,
        render,
        renderStatus
    }
})();

const Model = ((api, view) => {
    class State {
        #contents = []; 
        #artistName = ""; 
        #searchInput = ''; 

        get searchInput() {
            return this.#searchInput;
        }
        set searchInput(inputvalue) {
            const query = view.domString.statusText;
            const searchInputEle = document.querySelector('#' + query); 
            view.renderStatus(searchInputEle, inputvalue);
            console.log(searchInputEle);
        }
        get artistName() {
            return this.#artistName;
          }
      
        set artistName(name) {
            this.#artistName = name;
          }

        get contents() { 
            return this.#contents;
        }
        set contents(newlist) {
            this.#contents = newlist; 
            const query = view.domString.itemList;
            const contentsElement = document.querySelector('#' + query); 
            const htmltmp = view.initContentTmp(this.#contents);           
            view.render(contentsElement, htmltmp);                          
        }
    }

    const getAlbums = api.getAlbums;

    return {
        State,
        getAlbums
    }
})(itunesAPI, View);

const AppController = ((view, model) => {
    const state = new model.State(); 

    const addListenerOnInput = () => {
        const query = view.domString.searchInput;
        const searchInputEle = document.querySelector('#' + query); 

        searchInputEle.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                state.artistName = event.target.value;  // 'name'
                model.getAlbums(state.artistName).then(data => { 
                    console.log(data)
                    const resultCount = data.resultCount;
                    const artistName = state.artistName;
                    state.searchInput = `${resultCount} results for "${artistName}"`; 
                    state.contents = data.results;
                });
                state.searchInput = ''; 
            }
        });
    }
    const init = () => {
            addListenerOnInput();
        };
    return {
        init
    }
})(View, Model);

AppController.init();
