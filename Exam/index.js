const todoInputEle = document.querySelector("#" + "input");



todoInputEle.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {

    url_get = `https://itunes.apple.com/search?term=${event.target.value}&media=music&entity=album&attribute=artistTerm&limit=500`;
    console.log(url_get);


    fetchJsonp(url_get)
  .then(res => res.json())
  .then(res => {
      let data = res.results;
      let num_songs_ele = document.querySelector("#" + "num_songs");
      num_songs_ele.innerHTML = `${data.length} results for "${event.target.value}"`;
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
});
