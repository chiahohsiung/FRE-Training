const SearchAPI = (() => {
    const getAllEle = (ARTIST_NAME) => {
        const baseurl = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
        return fetch(baseurl).then((response) => response.json());
    }
    return {
        getAllEle
    }
})();


const View = (() => {
    const getResultTemplate = (albumList) => {
        let template = '';
        albumList.forEach(ele => {
            template += `
            <div class="card">
                <img src= "${ele.cover}" alt="" class = 'card-img'>
                <div class="card-title">
                    ${ele.name}
                </div>
            </div>
            `;
        })
        return template;
    }
    return {
        getResultTemplate
    }

})();


const Modle = ((view, api) => {

    class State {
        #count = 0;
        #albumList = [];
        #input = '';
        get input() {
            return this.#input;
        }

        set input(input) {
            this.#input = input;
        }

        get count() {
            return this.#count;
        }
        set count(cnt) {
            this.#count = cnt;
            const ResultCnt = document.querySelector('#results-count');
            ResultCnt.innerHTML = `Totally ${this.#count} results for "${this.#input}"`;
        }
        get albumList() {
            return this.#albumList;
        }
        set albumList(input) {
            this.#albumList = input;
            const albums = document.querySelector('.card-grounp');
            const template = view.getResultTemplate(this.#albumList);
            albums.innerHTML = template;
        }
    }

    const getAllEle = api.getAllEle;
    return {
        State,
        getAllEle
    }

})(View, SearchAPI);


const AppController = ((model, view) => {
    const state = new model.State();

    const addListenerOnSearch = () => {
        const searchBar = document.getElementById('searchBar');
        const button = document.getElementsByClassName('search-button');

        searchBar.addEventListener('keyup', (e) => {
            const input = e.target.value;
            state.input = input;
            console.log(input);
            model.getAllEle(input).then(data => {
                console.log(data)
                state.count = data.resultCount;
                let result = data.results;
                state.albumList = result.map((ele) => {
                    return {
                        name: ele.collectionName,
                        cover: ele.artworkUrl100
                    }
                })
            });
            // const url = `https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=500`;
            // fetch(url).then(response => response.json()).then(data => {
            //     console.log(data);
            //     state.count = data.resultCount;
            //     let result = data.results;
            //     state.albumList = result.map((ele) => {
            //         return {
            //             name: ele.artistName,
            //             cover: ele.artworkUrl100
            //         }
            //     })
            // });
        });

    };


    const init = () => {
        addListenerOnSearch();
    }

    return {
        init
    }
})(Modle, View);

AppController.init();
