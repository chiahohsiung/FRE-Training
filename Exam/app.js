const searchAlbums = (() => {
    const leftUrl = 'https://itunes.apple.com/search?term=${';
    const rightUrl = '}&media=music&entity=album&attribute=artistTerm&limit=500';
    const getAllAlbums = (name) =>
        fetch([leftUrl, name, rightUrl].join(''))
            .then((response) => response.json());

    return {
        getAllAlbums
    }
})();

// searchAlbums.getAllAlbums('star').then(data => console.log(data));

const View = (() => {
    const domString = {
        elbuminput: 'search__input'
    }

    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }

    const searchAlbumsTmp = (albumsArray) => {
        let template = '';
        albumsArray.forEach(element => {
            template += `
                <div class = "card">
                    <img src="${element.artworkUrl100}" alt="${element.collectionName}" width="101" height="110">
                    <p class = "card_content">${element.collectionName}</p>
                </div>
                `
        });
        return template;
    }

    return {
        domString,
        render,
        searchAlbumsTmp
    }

})();


// const Model = ((api, view) => {
//     class Album {
//         constructor(resultCount, results) {
//             this.resultCount = resultCount;
//             this.results = results;
//         }
//     }

//     class State {
//         #inputSearch = '';

//         get inputSearch() {
//             return this.#inputSearch;
//         }

//         set inputSearch(inputvalue) {
//             this.#inputSearch = inputvalue;

//         }
//     }

// })(searchAlbums, View);

// const myInput = () => {
//     const input = document.querySelector('#' + View.domString.elbuminput);
//     const log = document.getElementById('demo');
//     console.log(input, log);
//     input.addEventListener('keydown', (input) => {
//         if (input.key === 'Enter') {
//             searchAlbums.getAllAlbums(input.target.value).then(data => console.log(data));
//             log.textContent = input.target.value;
//             console.log("The term searched for was " + input.target.value);
//         }

//     })
// }

// myInput();
const AppController = ((view) => {
    const addListenerOnInput = () => {
        const inputEle = document.querySelector('#' + view.domString.elbuminput);
        const albumsEle = document.querySelector('.albums');
        inputEle.addEventListener('keyup', (event) => {
            if (event.key === 'Enter')
                searchAlbums.getAllAlbums(event.target.value)
                    .then((data) => {
                        const res = document.querySelector("#info");
                        res.textContent = data.resultCount + " resulsts for \"" + event.target.value + "\"";
                        const albums = view.searchAlbumsTmp(data.results);
                        view.render(albumsEle, albums);
                    })
        })
    }

    const init = () => {
        addListenerOnInput();
    };

    return {
        init
    }

})(View);

AppController.init();

