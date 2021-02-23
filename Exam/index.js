const searchAPI = (() => {
    

    const getAlbums = (name) =>
        fetchJsonp("https://itunes.apple.com/search?" + `term=\$\{${name}\}` + "&media=music&entity=album&attribute=artistTerm&limit=500")
        .then(res => res.json())

    return {
        getAlbums,
    }
})();

const View = (() => {
    const domString = {
        resultList: 'flexGrid',
        searchinput: 'search-input',
        header: "query",
        searchbtn: "search-button",
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    };

    const renderText = (element, text) => {
        element.innerText = text;
    };

    const initSearchTmp = (resultArray) => {
        let template = '';
        resultArray.forEach(ele => {
            template += `
                <div class="card">
                    <img class="card-img" src="${ele.artworkUrl100}" alt="${ele.collectionId}">
                    <div class="card-content">
                        ${ele.collectionName}
                    </div>
                </div>
            `;
        });
        return template;
    }

    return {
        domString,
        render,
        renderText,
        initSearchTmp
    }
})();

const Model = ((api, view) => {
    // class Search {
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }

    class State {
        #searchResult = [];
        #searchinput = '';
        #query = '';

        get query() {
            return this.#query;
        }
    
        set query(text) {
            const element = document.querySelector("#" + view.domString.header);
            view.renderText(element, text);
        }

        get searchinput() {
            return this.#searchinput;
        }
        set searchinput(inputvalue) {
            this.#searchinput = inputvalue;

        //     const searchinputEle = document.querySelector('#' + view.domString.searchinput);
        //     searchinputEle.value = this.#searchinput;
        }

        get searchResult() {
            return this.#searchResult;
        }
        set searchResult(newlist) {
            this.#searchResult = newlist;

            const resultElement = document.querySelector('#' + view.domString.resultList);
            const htmltmp = view.initSearchTmp(this.#searchResult);
            view.render(resultElement, htmltmp);
        }
    }

    const getAlbums = api.getAlbums;

    return {
        State,
        getAlbums,
    }
})(searchAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addListenerOnInput = () => {
        const searchInputEle = document.querySelector('#' + view.domString.searchinput);
        searchInputEle.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value.length > 0) {
                state.searchinput = event.target.value;

                model.getAlbums(state.searchinput).then((data) => {
                    console.log("results", data);
                    state.query = `${data.resultCount} results for "${state.searchinput}"`;
                    state.searchResult = data.results;
                });
                
            }
        });
        const searchbtn = document.querySelector('#' + view.domString.searchbtn);
        searchbtn.addEventListener('click', (event) => {
            state.searchinput = document.querySelector('#' + view.domString.searchinput).value;
            console.log(state.searchinput);
            model.getAlbums(state.searchinput).then((data) => {
                console.log("results", data);
                state.query = `${data.resultCount} results for "${state.searchinput}"`;
                state.searchResult = data.results;
            });
        });
    }

    const init = () => {
        addListenerOnInput();
    };
    return {
        init,
    };
})(View, Model);

AppController.init();