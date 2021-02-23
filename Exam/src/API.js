const API = (() => {
    const baseUrl = (artistName) => {
        return `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    }
    const getAlbums = async (artistName) => {
        let url = baseUrl(artistName)
        const res = await fetch(url, {})
        const albums = await res.json()
        return albums
    }

    return {
        getAlbums,
    }
})()
export { API }
