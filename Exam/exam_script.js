function getalbums(name) {
    fetchJsonp(
      "https://itunes.apple.com/search?term=" +
        name +
        "&media=music&entity=album&attribute=artistTerm&limit=500"
    )
      .then((response) => response.json())
      .then((data) => render(data.results, name));
  }
  
  function getResult() {
    let domEleInput = document.querySelector(".search-input");
    let domEleButton = document.querySelector(".search-button");
  
    domEleInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        getalbums(domEleInput.value);
      }
    });
  
    domEleButton.addEventListener("click", () => {
      getalbums(domEleInput.value);
    });
  }
  
  function render(data, keyword) {
    let domEleAlbums = document.querySelector(".search-albums");
    let searchDom = document.querySelector(".search-info");
    let resultsSize = data.length.toString();
  
    allalbums = "";
    data.forEach((ele) => {
      allalbums += `
          <div class="card">
              <img src="${ele.artworkUrl100}">
              <div class="content">${ele.collectionName}</div>
          </div>
          `;
    });
    searchDom.innerHTML = resultsSize + " results for " + '"' + keyword + '"';
    domEleAlbums.innerHTML = allalbums;
  }
  
  function controlSearchInputBox() {
    let domEleInput = document.querySelector(".search-input");
    domEleInput.addEventListener("click", () => {
      domEleInput.style.width = "100%";
    });
    document.body.addEventListener("click", (event) => {
      if (event.target !== domEleInput) {
        domEleInput.style.width = "80%";
      }
    });
  }
  
  getResult();
  controlSearchInputBox();
  