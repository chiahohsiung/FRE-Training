const searchAdd = document.querySelector(".searchResult")
const inputValue = document.querySelector("#search_input")


const baseurl = "https://itunes.apple.com/search"
let singerPath = ''
let data = ''




const fetchData = (async (url = '') => {
    const response = await fetch(url, {
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



const dealData = async () => {

    await fetchData([baseurl, singerPath].join('')).then(data => console.log(data));
    data = await fetchData([baseurl, singerPath].join(''));
    console.log(data);
}



inputValue.addEventListener('keyup', (event) => {
    //console.log(event.keyCode);
    if (event.key === 'Enter') {

        inputValue.value = event.target.value;
        searchName = event.target.value;
        singerPath = `?term=${searchName}&media=music&entity=album&attribute=artistTerm&limit=500"`
        console.log(searchName);
        console.log(singerPath);

        dealData();


        setTimeout(() => {
            const div1add = document.createElement('div')
            const div2add = document.createElement('div')
            const searchAlbum = document.querySelector('.searchResult_info')
            searchAlbum.remove();
            div2add.classList.add("flexGrid");
            let template = '';
            for (let i = 0; i < data.resultCount; i++) {

                template += `<div class="card"><img class="card_img" src= ${data['results'][i].artworkUrl100}><div class="card_content">${data['results'][i].collectionName}</div></div>`
            }
            div2add.innerHTML = template
            div1add.innerHTML = `<div class="searchResult_info">${data['resultCount']} result for ${inputValue.value}</div>`
            searchAdd.append(div1add);
            searchAdd.append(div2add);



        }, 1000)


    }
});








