const cardApi = (() => {
    
    const getAllCards = (searchinput) =>
        fetch([`https://itunes.apple.com/search?term=${searchinput}&media=music&entity=album&attribute=artistTerm&limit=200`, searchinput])
            .then((response) => response.json());

    return {
        getAllCards
    }
})();

const View = (() => {
    const domString = {
        searchinput:'searchInput',
        info: 'info',
        result: 'resultGrid'
    }
    const render = (element, htmlTemplate) => {
        element[0].innerHTML = htmlTemplate;
    }
    const initList = (result) => {
        let template = '';
        result.results.forEach(element => {
            template += `
                <div class="card">
                    <img class="card_img" src=${element.artworkUrl100} alt>
                    <div class="card_content">${element.collectionName}</div>
                </div>
            `;
        });
        return template;
    }

    const getInfo = (result) => {
        let template = `<div id="info">${result.resultCount} results for ${result.searchinput}</div>`;
        return template;
    }

    return {
        domString,
        render,
        initList,
        getInfo
    }
})();

const Model = ((api, view) => {
    class card {
        constructor(collectionId, artWorkUrl1100, collectionName) {
            this.collectionId = collectionId;
            this.artWorkUrl1100 = artWorkUrl1100;
            this.collectionName = collectionName;
        }
    }

    class State {
        #cardList = [];
        #searchinput = '';

        get searchinput() {
            return this.#searchinput;
        }
        set searchinput(inputvalue) {
            this.#searchinput = inputvalue;

            const cardEle = document.querySelector('#' + view.domString.searchinput);
            cardEle.value = this.#searchinput;
        }

        get cardList() {
            return this.#cardList;
        }
        set cardList(newlist) {
            this.#cardList = newlist;
            const cardElement = document.getElementsByClassName(view.domString.result);
            const infoElement = document.getElementsByClassName(view.domString.info);
            const infotmp = view.getInfo(this.#cardList);
            const htmltmp = view.initList(this.#cardList);
            view.render(infoElement, infotmp)
            view.render(cardElement, htmltmp);

        }
    }

    const getAllCards = api.getAllCards;

    return {
        card,
        State,
        getAllCards,
    }
})(cardApi, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addListenerOnInput = () => {
        const cardEle = document.querySelector('#' + view.domString.searchinput);
        cardEle.addEventListener('keyup', (event) => {
            
            if (event.key === 'Enter') {
                state.searchinput = event.target.value;
                
                model.getAllCards(state.searchinput).then(data => {
                    data.searchinput = state.searchinput;
                    state.cardList = data;
                })
            }
        });
    }

    const init = () => {
        addListenerOnInput();
    }
    return {
        init
    }
})(View, Model);

AppController.init();