window.addEventListener("DOMContentLoaded", () => {
    let searchBar = document.getElementById('search-form')
   
  const submitInput = (e) => {
      e.preventDefault();
      let searchName = document.querySelector('#input-name').value;
      let display = document.querySelector('.display_result');
      display.innerHTML = "";
      console.log(searchName);
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
          fetch(`https://itunes.apple.com/search?term=${searchName}&media=music&entity=album&attribute=artistTerm&limit=500.`, requestOptions)
          .then(response => response.text())
          .then(result => {
              let list = JSON.parse(result).results;
              
              let count_result = list.length;
              console.log(count_result);
              let header = document.querySelector('.header');
              header.innerHTML = `${count_result} results for "${searchName}"`;
   
              list.forEach(ele => {
                  let album = document.createElement('div');
                  album.classList.add("album_name");
                  let album_image = document.createElement('img');
                  album_image.classList.add("album_img")
                  album.innerHTML = ele.collectionCensoredName;
                  album_image.src = ele.artworkUrl100;
                  album.appendChild(album_image);
                  display.appendChild(album);
              })
              console.log(list); 
          })
          .catch(error => console.log('error', error));
          
    }
   
  searchBar.addEventListener("submit", submitInput);
   
  })
  