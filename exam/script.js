
window.addEventListener('DOMContentLoaded', () => {

let resultsQty = document.querySelector('#results-qty')
let form = document.querySelector('#form')
form.addEventListener("submit", (e) => {

    e.preventDefault();
    let parent = document.querySelector('.results')
    parent.innerText = ""
    let inputText = document.getElementById('search-query')
    let url = `https://itunes.apple.com/search?term=${inputText.value}&media=music&entity=album&attribute=artistTerm&limit=500.`

        fetch(url)
        .then(response => response.text())
        .then(result => {
            let results = JSON.parse(result).results
            resultsQty.innerText = `${results.length} results for "${inputText.value}"`
            inputText.value = ""
            console.log(results)
            results.forEach(obj => {
                let album = document.createElement('div')
                album.innerText = obj.collectionCensoredName
                album.classList.add('card')
                let img = document.createElement('img')
                img.src = obj.artworkUrl60
                album.appendChild(img)
                parent.appendChild(album)
            })
        })
        .catch(error => console.log('error', error));

})




})