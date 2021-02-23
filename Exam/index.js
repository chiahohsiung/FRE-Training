const API = (() => {
    const baseurl = "https://itunes.apple.com/search?term=";
    const endpoint = "&media=music&entity=album&attribute=artistTerm&limit=500";
    const search = (artist) => {
        return fetch([baseurl, artist, endpoint].join("")).then((data) =>
            data.json()
        );
    };
    return {
        search,
    };
})();

const View = (() => {
    const constructTemplate = (list, input) => {
        let template =
            ' <div class = "song_results" id = "song_results">' +
            list.length +
            ' results for "' +
            input +
            '"</div> <div class = "song_break"></div>';
        list.forEach((item) => {
            template +=
                '<div class = "song_card"><img src = "' +
                item.artworkUrl100 +
                '"></img><div class = "song_title">' +
                item.collectionName +
                "</div></div>";
        });
        return template;
    };
    const render = (element, template) => {
        //document.getElementById("song_presearch").innerText = "wtf"
        document.getElementById("song_results").remove();
        return (element.innerHTML = template);
    };
    return {
        constructTemplate,
        render,
    };
})();

class State {
    numSongs;
    songs;
    input;
}

const init = () => {
    const state = new State();

    const addListnerSearch = () => {
        const formElement = document.getElementById("search");
        const inputElement = document.getElementById("text_input");
        const songElement = document.getElementById("song_container");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            API.search(inputElement.value).then((data) => {
                if (data.resultCount !== 0) {
                    state.numSongs = data.resultCount;
                    state.songs = data.results;
                    state.input = inputElement.value;
                    let template = View.constructTemplate(
                        state.songs,
                        inputElement.value
                    );
                    View.render(songElement, template);
                }
            });
        });
    };
    addListnerSearch();
};

init();
