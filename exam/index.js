const loader = document.getElementById('loader');

const API = async (artist) => {
    const baseurl = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`;
    let response = await fetchJsonp(baseurl);
    let data = await response.json()
    return data
};

const View = (() => {
    const render = (element, htmlTemplate) => {
        loader.classList.remove('on');
        element.innerHTML = htmlTemplate;
    }
    const initResultsTmp = (resultObject, artist) => {
        let template = '';
        resultObject.results.forEach(ele => {
            template += `
                <div class="card">
                    <img src="${ele.artworkUrl100}" alt="${ele.artistName}"/>
                    <p>${ele.collectionName}</p>
                </div>
            `;
        });
        finalTemplate = `
            <div id="description">${resultObject.resultCount} results for "${artist}"</div>
            <div class="results">${template}</div>
        `
        return finalTemplate;
    }

    return {
        render,
        initResultsTmp
    }
})();

const search = (event) => {
    event.preventDefault();
    loader.classList.add('on');
    artist = document.getElementById('search').value;
    init();
};

document.querySelector('#submit').addEventListener("click", search);
document.querySelector('#search').addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        search(event);
    }
});

const init = () => {
    if (artist) {
        API(artist).then(data => {
            const HTMLElement = document.querySelector("#content");
            View.render(HTMLElement, View.initResultsTmp(data, artist));
        });
    }
};

let artist = location.search.split('?query=')[1];
init();