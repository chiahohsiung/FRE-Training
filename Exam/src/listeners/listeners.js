import { View } from "../View.js"

const addSubmitListener = (state, model) => {
    const searchInputElement = document.querySelector(
        `#${View.DOMString.input}`
    )
    searchInputElement.addEventListener("keyup", async (event) => {
        event.preventDefault()
        if (event.key === "Enter") {
            state.searchInput = event.target.value
            console.log("input", state.searchInput)
            let albums = await model.getAlbums(state.searchInput)

            state.albumsList = albums
            state.searchInput = ""
        }
    })
}

export { addSubmitListener }
