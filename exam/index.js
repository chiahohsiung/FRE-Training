// Qiangwen Xu
// email: xuqiangwen1994 <at> gmail.com
// Github: x13-caesar

const searchAPI = (() => {
    const urlprefix = 'https://itunes.apple.com/search?term='
    const urlsuffix = '&media=music&entity=album&attribute=artistTerm&limit=500';

    const searchByName = (keyword) =>
        fetchJsonp(urlprefix + keyword + urlsuffix, {
            method: 'GET',
            headers: {
                'Host': 'example.com'}
            })
            .then((response) => response.json());
    const start = () => '';

    return {
        searchByName,
        start
    };
})();

const View = (() => {
    const domString = {
        searchresult: 'album-list',
        searchinput: 'album-search'
    }
    const render = (element, htmlTemplate) => {
        console.log("render....");
        element.innerHTML = htmlTemplate;
    }
    const initResultTemplate = (resultObject) => {
        let template = '';
        let albumArray = Object.values(resultObject)[1];
        albumArray.forEach(ele => {
            template += `
                <li class="album-list__album">
                    <img class="album__cover" src=${ele.artworkUrl100}></img>
                    <div class="album__name">${ele.collectionName}</div>
                </li>
            `;
        });
        return template;
    }

    return {
        domString,
        render,
        initResultTemplate
    }
})();

const Model = ((api, view) => {
    class Album {
    }

    class State {
        #searchresult = [];
        #searchinput = '';

        get searchinput() {
            return this.#searchinput;
        }
        set searchinput(inputvalue) {
            this.#searchinput = inputvalue;
            const searchInputEle = document.querySelector('#' + view.domString.searchinput);
            searchInputEle.value = this.#searchinput;
        }

        get searchresult() {
            return this.#searchresult;
        }
        set searchresult(newresult) {
            this.#searchresult = newresult;

            const albumElement = document.querySelector('#' + view.domString.searchresult);
            const htmltmp = view.initResultTemplate(this.#searchresult);
            view.render(albumElement, htmltmp);
        }
    }

    const searchByName = api.searchByName;
    const start = api.start;

    return {
        Album,
        State,
        searchByName,
        start
    }
})(searchAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addListenerOnInput = () => {
        const searchInputEle = document.querySelector('#' + view.domString.searchinput);
        searchInputEle.addEventListener('keyup', (event) => {
            
            if (event.key === 'Enter') {
                state.searchinput = event.target.value;
                model.searchByName(state.searchinput).then(data => {
                    console.log(data);
                    state.searchresult = data;
                });
                state.searchinput = '';
            }
        });
    }

    const init = () => {
        model.start();
        addListenerOnInput();
    }
    return {
        init
    }
})(View, Model);

AppController.init();