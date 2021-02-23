import { API } from "./API.js"
import { View } from "./View.js"

const Model = ((api, view) => {
    class AlbumCard {
        constructor(artistName, artistId, albumName, artworkUrl) {
            this.artistName = artistName
            this.artistId = artistId
            this.albumName = albumName
            this.artworkUrl = artworkUrl
        }
    }

    class State {
        _albumsList = []
        _searchInput = ""
        _albumsCount = 0

        get searchInput() {
            return this._searchInput
        }
        set searchInput(value) {
            this._searchInput = value
            const searchInputElement = document.querySelector(
                `#${view.DOMString.input}`
            )
            searchInputElement.value = this._searchInput
        }
        get albumsList() {
            return this._albumsList
        }

        set albumsList(newList) {
            this._albumsList = newList.results
            this._albumsCount = newList.resultCount
            console.log(this._albumsList, this._albumsCount)
            const albumsList = document.querySelector(
                `#${view.DOMString.albums}`
            )
            const htmlTemplate = view.init_albums_template(
                this._albumsList
            )
            view.render(albumsList, htmlTemplate)
        }
    }
    const { getAlbums } = api
    return {
        AlbumCard,
        State,
        getAlbums,
    }
})(API, View)

export { Model }
