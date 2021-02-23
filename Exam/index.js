const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");

const getAPI = async () => {
  const wordQuery = inputField.value;
  const endpoint = `https://itunes.apple.com/search?term=${wordQuery}&media=music&entity=album&attribute=artistTerm&limit=500`;

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      show(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

const onClickFn = event => {
  event.preventDefault();
  getAPI();
};

submit.addEventListener("click", onClickFn);

function show(data) {
  let card = "";

  for (let r of data.results) {
    card += `<div class="card">
    <img class="image" src="${r.artworkUrl100}" alt="${r.collectionName}">
    <div class="content">${r.collectionName}</div>
  </div>`;
  }
  document.getElementById("continer").innerHTML = card;
  document.getElementById("text").innerHTML = "Results Count:";

  document.getElementById("count").innerHTML = data.resultCount;
}
