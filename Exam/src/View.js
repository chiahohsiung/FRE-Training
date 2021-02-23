const View = (() => {
    const DOMString = {
        albums: "album-section",
        cards: "album-card",
        input: "search-input",
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate
    }
    const init_albums_template = (albums) => {
        let template = ""
        albums.forEach((ele) => {
            template += `
            <div id="album-card" class="album-card flex">
                  <img src=${ele.artworkUrl100} alt="album artwork" class="artist-img" />
                  <div class="card-content album-title">
                  ${ele.collectionName}
                    </div>
              </div>
        `
        })
        return template
    }
    return {
        DOMString,
        render,
        init_albums_template,
    }
})()

export { View }
