const search = async (elem) => {
    if (event.key === 'Enter'){
        const url = `https://itunes.apple.com/search?term=${elem.value}&media=music&entity=album&attribute=artistTerm&limit=500`
        const res = await fetchJsonp(url)
        const json = await res.json()
        document.getElementById('container_num').innerText = `${json.results.length} results for ${elem.value}`
        console.log(json)
    }
}
