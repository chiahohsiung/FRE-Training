// tried the MVC but it didn't work (too confusing with vanilla JS), check below:

window.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('albumlist_input');
    input.addEventListener('submit', event => {
        //event.preventDefault();
        const artist_name = event.target.value;

        const baseurl = `https://itunes.apple.com/search?term=${artist_name}&media=music&entity=album&attribute=artistTerm&limit=500`;
        const display = document.getElementById('album-content');

        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => data.results.forEach(ele => {
                display.innerHTML += `
                <div class="card">
                    <img src=${ele.artworkUrl100} alt="album image">
                    <div class="container">
                        <h4><b>${ele.collectionName}</b></h4>
                    </div>
                </div>
            `;
            }));
    })
});

// const iTunesAPI = (() => {
//     //const artist_name = '';
//     const baseurl = 'https://itunes.apple.com/search?term=${artist_name}&media=music&entity=album&attribute=artistTerm&limit=500';

//     const getAlliTunes = () =>
//         fetch(baseurl)
//             .then((response) => response.json());

//     return {
//         getAlliTunes,
//     }
// })();

// const View = (() => {
//     const domString = {
//         albumlist: 'album-content',
//         albumInput: 'albumlist__input'
//     }
//     const render = (element, htmlTemplate) => {
//         element.innerHTML = htmlTemplate;
//     }
//     const initAlbumListTmp = (albumArray) => {
//         let template = '';
//         albumArray.forEach(ele => {
//             template += `
//                 <div class="card">
//                     <img src=${ele.artworkUrl100} alt="album image" style="width:100%">
//                     <div class="container">
//                         <h4><b>${ele.collectionName}</b></h4>
//                     </div>
//                 </div>
//             `;
//         });
//         return template;
//     }

//     return {
//         domString,
//         render,
//         initAlbumListTmp
//     }
// })();

// const Model = ((api, view) => {
//     class iTunes {
//         constructor(userId, title) {
//             this.userId = userId;
//             this.title = title;
//         }
//     }

//     class State {
//         #albumlist = [];
//         #albumInput = '';

//         get albumInput() {
//             return this.#albumInput;
//         }
//         set albumInput(inputvalue) {
//             this.#albumInput = inputvalue;

//             const albumInputEle = document.querySelector('#' + view.domString.albumInput);
//             albumInputEle.value = this.#albumInput;
//         }

//         get albumlist() {
//             return this.#albumlist;
//         }
//         set albumlist(newlist) {
//             this.#albumlist = newlist;

//             const iTuneElement = document.querySelector('#' + view.domString.albumlist);
//             const htmltmp = view.initAlbumListTmp(this.#albumlist);
//             view.render(iTuneElement, htmltmp);

//         }
//     }

//     const getAlliTunes = api.getAlliTunes;

//     return {
//         iTunes,
//         State,
//         getAlliTunes,
//     }
// })(iTunesAPI, View);

// const AppController = ((view, model) => {
//     const state = new model.State();

//     const init = () => {
//         const albumInputEle = document.querySelector('#' + view.domString.albumInput);
//         albumInputEle.addEventListener('keyup', (event) => {

//             if (event.key === 'Enter') {
//                 state.albumInput = event.target.value;
//                 model.getAlliTunes().then(data => {
//                     state.albumlist = data;

//                 });
//             }
//             return {
//                 init
//             }
//         })
//     }
// })(View, Model);

// AppController.init();
