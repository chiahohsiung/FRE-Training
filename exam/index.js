const getAlbums = (artistName) => {
    const url = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`;
    fetch(url).then(response => response.json());
}

const getAlbumTemplate = (albumList) => {
    let template = '';
    albumList.forEach(ele => {
        template += `
        <div class="card">
            <img src= "${ele.albumUrl}" alt="Avatar" style="width:100%">
            <div class="container">
                <b>${ele.name}</b>
            </div>
        </div>
        `;
    })
    return template;

}

class AlbumInfo {
    #total = 0;
    //{name:xxx, url:xxx}
    #albumList = [];
    #inputVal = '';

    get inputVal(){
        return this.#inputVal;
    }

    set inputVal(val){
        this.#inputVal = val; 
    }

    get total(){
        return this.#total;
    }

    set total(val){
        this.#total = val;
        const summaryEle = document.querySelector('#summary');
        console.log(summaryEle);
        summaryEle.innerHTML = `Totally ${this.#total} results for "${this.#inputVal}"`; 
    }

    get albumList(){
        return this.#albumList;
    }

    set albumList(val){
        this.#albumList = val;
        const albumEle = document.querySelector('#result-content');
        const template = getAlbumTemplate(this.#albumList);
        albumEle.innerHTML = template;
    }
    
}


const app = (() => {
    const albumInfo = new AlbumInfo();
    const addListener = () => {
        const inputEle = document.querySelector('#search-input');
        const btnEle = document.querySelector('#search-button');
        const eventHandler = (e)=>{
            e.preventDefault();
            console.log(e);
            if(e.key === 'Enter'){
                const inputVal = e.target.value;
                albumInfo.inputVal = inputVal;
                const url = `https://itunes.apple.com/search?term=${inputVal}&media=music&entity=album&attribute=artistTerm&limit=500`;
                fetch(url).then(response => response.json())
                    .then((data) => {
                        console.log(data);
                        albumInfo.total = data.resultCount;
                        let resultList = data.results;
                        albumInfo.albumList = resultList.map((val) =>{
                            return {
                                name: val.artistName,
                                albumUrl: val.artworkUrl100
                            }
                        })
                        console.log(albumInfo);
                    });
            }
        }

        inputEle.addEventListener('keyup', eventHandler);
        btnEle.addEventListener('click', (e)=>{
            e.preventDefault();
            const inputVal = document.querySelector('#search-input').value;
            albumInfo.inputVal = inputVal;
            const url = `https://itunes.apple.com/search?term=${inputVal}&media=music&entity=album&attribute=artistTerm&limit=500`;
            fetch(url).then(response => response.json())
                .then((data) => {
                    console.log(data);
                    albumInfo.total = data.resultCount;
                    let resultList = data.results;
                    albumInfo.albumList = resultList.map((val) =>{
                        return {
                            name: val.artistName,
                            albumUrl: val.artworkUrl100
                        }
                    })
                    console.log(albumInfo);
                });

        });
    }

    const init = () => {
        console.log(albumInfo);
        addListener();
    }
    return {
        init
    }
})()



app.init();
