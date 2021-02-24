const fetchData = (async (searchName) => {
    const baseurl = `https://itunes.apple.com/search?term=${searchName}&media=music&entity=album&attribute=artistTerm&limit=500`
    const response = await fetch(baseurl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.json();


});

function renderPage(res, value) {
    const resultTag = document.querySelector(".searchResult");
    const searchTag = document.querySelector('.searchResult_info');
    searchTag.remove();
    const resultNumber = document.createElement('div');
    const resultContent = document.createElement('div')
    resultContent.classList.add("flexGrid");
    let template = '';
    for (let i = 0; i < res.resultCount; i++) {

        template += `<div class="card"><img class="card_img" src= ${res['results'][i].artworkUrl100}><div class="card_content">${res['results'][i].collectionName}</div></div>`
    }
    resultContent.innerHTML = template
    resultNumber.innerHTML = `<div class="searchResult_info">${res['resultCount']} result for ${value}</div>`
    resultTag.append(resultNumber);
    resultTag.append(resultContent);


}


const Appcontroller = (() => {

    const addListenerOnInput = () => {
        const inputTag = document.querySelector("#search_input");
        inputTag.addEventListener('keyup', (event) => {

            if (event.key === 'Enter') {
                fetchData(event.target.value)
                    .then(data => renderPage(data, event.target.value))

            };

        });
    }

    const init = () => {
        addListenerOnInput()
    }

    return {
        init
    }

})();

Appcontroller.init();