async function searchAlbums(name) {
    const baseurl = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=500`;
    const res = await fetchJsonp(baseurl);
    // {
    //     method: 'GET',
    //     headers: {
    //         'Content-type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }
    return res.json();
}

function render(results, name) {
    const searchTitle = document.querySelector('#search-info');
    const element = document.querySelector('#search-result');
    searchTitle.innerHTML = `${results.resultCount} results by "${name}"`;
    const template = htmlTmp(results.results);
    element.innerHTML = template;
}

function htmlTmp(albumsArray) {
    let temp = '';
    albumsArray.forEach(ele => {
        temp += `
                <li class="showblock">
                    <img src="${ele.artworkUrl100}">
                    <p>${ele.collectionName}</p>
                </li>
                `;
    });
    console.log(temp);
    return temp;
}


const AppController = (() => {
    const addListnerOnInput = () => {
        const input = document.querySelector('#search-input');
        input.addEventListener('keyup', (event) => {
            if(event.key === 'Enter') {
                searchAlbums(event.target.value).then(data => render(data, event.target.value));
            }
        });
    }

    const init = () => {
        addListnerOnInput();
    }

    return {
        init
    }

})();

AppController.init();