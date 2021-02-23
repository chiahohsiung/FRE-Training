const searchAPI = (term) =>{
    const queryUrl = `https://itunes.apple.com/search?term=${term}&media=music&entity=album&attribute=artistTerm&limit=500`;
    fetch(queryUrl).then((response) => response.json()).then((data)=> render(data.results, term));
}

const render = (jsonArr,term) =>{
    let template = '';
    jsonArr.forEach(ele =>{
        template += `
        <div class="card">
            <img class="card_img" src ="${ele.artworkUrl100}" alt>
            <div class="card_content">${ele.collectionName}</div>
        </div>
        `;
    });
    document.getElementById('info').innerHTML = `${jsonArr.length} results for "${term}"`;
    document.getElementById('albumGrid').innerHTML =template;
}

const addListenerOnInput = () => {
    const btn = document.getElementById('searchBtn');
    btn.addEventListener("click",(event)=>{
        const keyWord = document.getElementById('myInput').value;
        searchAPI(keyWord);
    });
    
}
const addListenerOnSearchBar = () =>{
    const input = document.getElementById('myInput');
    input.addEventListener('focusin',(event)=>{
        document.getElementById('myInput').style.width = '50%';
    });
    input.addEventListener('focusout',(event)=>{
        document.getElementById('myInput').style.width = '40%';
    });
}
addListenerOnSearchBar();
addListenerOnInput();
