'use strict';

const searchArtist = () => {
  let searchInput = document.getElementById('search');
  let submitButton = document.getElementById('submit');
  
  const fetchData = async (inputUrl) => {
    let getMethod = {
      method: 'GET',
      headers: {
        'content-type': 'application.json'
      }
    }
    let APIResponse = await fetch(inputUrl, getMethod);
    let data = await APIResponse.json();
    handleResultData(data);
  };
  const handleResultData = (data) => {
    const { resultCount , results } = data;
    document.getElementById('result-count').innerText = `${resultCount} results for \"${searchInput.value}\"`;
    let resultCards = document.getElementById('result-cards');
    results.forEach(element => {
      let card = document.createElement('li');
      let img = document.createElement('img');
      let h3 = document.createElement('h3');
      img.src = element.artworkUrl100;
      h3.innerText = element.collectionName;
      card.appendChild(img);
      card.appendChild(h3);
      resultCards.appendChild(card)
    });
    searchInput.value = '';
  }
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('result-cards').innerHTML = '';
    let ARTIST_NAME = searchInput.value;
    let url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=500`;
    fetchData(url);
  });
};
searchArtist();

