const inputElement = document.querySelector("#search");
inputElement.addEventListener('keyup', e => {
  if (e.key == 'Enter') {
    let template = '';
    let artistName = e.target.value;
    const data = fetch(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`)
    // {
    //   mode: 'no-cors'
    // })
    .then(res => res.json()).catch(err => console.log('error:', err))
    .then(data => {data.results.forEach(ele => {
      template +=
      `<div class='result col-3'>
        <div class='card'>
          <img class='artwork' src=${ele.artworkUrl100}></img>
          <p class='collection-name'>${ele.collectionName}<p>
        </div>
      </div>`;
    })
    return template
  }
    ).then(temp => render(temp))
  }
});

const render =(temp) => {
  document.querySelector('.content-wrap').innerHTML = temp;
}
