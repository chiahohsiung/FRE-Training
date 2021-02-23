const View = (() => {
  /**
   * An object containing the dom strings
   */
  const dom = {
    searchBarId: "#search__bar",
    body: "#body",
    title: ".title",
    searchIcon: ".search__icon",
  };

  /**
   * Appends elements to a dom element
   * Takes a target parent node and apppends child nodes
   */
  const appendElements = (target, elements) => {
    // reset the target html
    target.innerHTML = "";
    elements.map((element) => {
      target.appendChild(element);
    });
  };
  /**
   * A function to set the inner text
   */
  const setInnerText = (element, text) => (element.innerText = text);
  /**
   * A function to create a dom element(s)
   */
  const createDomElements = (albums) => {
    return albums.map((album) => {
      let item = document.createElement("div");
      let itemLink = document.createElement("a");
      itemLink.href = album.collectionViewUrl;
      itemLink.setAttribute("target", "_blank");
      item.className = "item__container";

      let img = document.createElement("img");
      img.setAttribute("alt", `${album.collectionName} album art`);
      img.src = album.artworkUrl100;
      let ttl = document.createElement("h3");
      ttl.innerText = album.collectionName;

      itemLink.appendChild(img);

      let meta = document.createElement("div");
      meta.className = "metadata";
      meta.appendChild(ttl);
      if (album.collectionExplicitness === "explicit") {
        let explicit = document.createElement("div");
        explicit.className = "explicit";
        let explicitImage = document.createElement("img");
        explicitImage.src = "./css/images/explicit-64.png";
        explicit.appendChild(explicitImage);
        meta.appendChild(explicit);
      }
      let artist = document.createElement("p");
      artist.className = "artist__name";
      artist.innerHTML = album.artistName;

      let price = document.createElement("p");
      price.className = "price";
      price.innerText = `$${album.collectionPrice}`;
      itemLink.appendChild(meta);

      itemLink.appendChild(artist);
      itemLink.appendChild(price);

      item.appendChild(itemLink);
      return item;
    });
  };
  return {
    dom,
    appendElements,
    createDomElements,
    setInnerText,
  };
})();

export default View;
