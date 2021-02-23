  function getAPI(artist){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`,  {
          mode: 'cors',
          credentials: 'include',
          method: 'POST',
          headers: headers
      })
    .then(resp => resp.json() )
    .then(data => {
      let resultCount = data.results.length;
      resultTitle(artist, resultCount)
      data.results.forEach(result => {
        createCard(result);
      })
    })
  };

function getResults(e){
  e.preventDefault();
  removePrevResults();
  let searchInput = document.getElementsByClassName('search_input')[0].value;
  getAPI(searchInput);
}

let form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', getResults);

function createCard(result){
  let name = result.collectionName;
  let image = result.artworkUrl100;
  let resultGrid = document.getElementsByClassName('result_grid')[0];
  let card = document.createElement('div');
  card.className = "card";
  card.innerHTML = `
    <img class="card_img" src=${image} alt="image">
    <div class="album_name">${name}</div>
  `;
  resultGrid.append(card);
}

function resultTitle(searchInput, resultCount){
  let result_title = document.getElementsByClassName('search_result_title')[0];
  result_title.innerText = `${resultCount} results for "${searchInput}"`;
}

function removePrevResults(){
  let result_grid = document.getElementsByClassName('result_grid')[0];
  result_grid.innerHTML = ``;
}