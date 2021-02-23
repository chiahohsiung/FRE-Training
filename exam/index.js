const search = async (elem) => {
    if (event.key === 'Enter'){
        const url = `https://itunes.apple.com/search?term=${elem.value}&media=music&entity=album&attribute=artistTerm&limit=500`
        const res = await fetchJsonp(url)
        const json = await res.json()
        document.getElementById('container_num').innerText = `${json.results.length} results for "${elem.value}"`

        htmlArr = []
        json.results.forEach(e => {
            htmlArr.push(
            `
                <div class="search_element">
                    <img class="search_element_image" src="${e.artworkUrl60}" alt="${e.collectionName}">
                    <p class="search_element_text">
                        ${e.collectionName}
                    </p>
                </div>
            `)
        })

        document.getElementById('container_result').innerHTML = htmlArr.join('')
    }
}
