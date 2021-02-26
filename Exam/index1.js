

fetchData = function (value) {
  
  url_get = `https://itunes.apple.com/search?term=${value}&media=music&entity=album&attribute=artistTerm&limit=500`;
  console.log(url_get);


    fetchJsonp(url_get)
  .then(res => res.json())
  .then(res => {
      let data = res.results;
      let num_songs_ele = document.querySelector("#" + "num_songs");
      num_songs_ele.innerHTML = `${data.length} results for "${value}"`;
      let template = '';
      data.forEach(ele => {
        template += `<div class="album">
                        <div class="image"><img src= ${ele.artworkUrl100} alt="img"></div>
                        <div class="song_title">${ele.collectionName}</div>
                    </div>`
      })
      document.querySelector('#' + 'content').innerHTML = template;
      console.log(data[0])
  })
    
}


const InputEle = document.querySelector("#" + "input");

InputEle.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log(event.target.value);
    fetchData(event.target.value);
  }
});

const btnEle = document.querySelector("button");
btnEle.addEventListener('click', () => {
  console.log(InputEle.value);
  fetchData(InputEle.value);
});

