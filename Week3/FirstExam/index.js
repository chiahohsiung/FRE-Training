const createURl= artist=>`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`

const form = document.querySelector('#search_form')
const input= document.querySelector('#search_input')
const resultDiv= document.querySelector('.results')
const notification= document.querySelector('.notification')

function handleChange(){
    input.addEventListener('keyup',function(event){
        resultDiv.innerHTML=""
        notification.innerHTML=""
        if (input.value !== '') {
            getResults(input.value)
        } 
    })
}

function handleSubmit(){
    form.addEventListener('submit',event=>{
        event.preventDefault()
        resultDiv.innerHTML=""
        notification.innerHTML=""
        if (input.value !== ''){
            getResults(input.value)
        }
        
    })
}


function getResults(artist){
    const url= createURl(artist)
    fetch(url)
        .then(res=>res.json())
        .then(json=>displayResults(json))
        .catch(err=>console.log(err))
}
function displayResults(json){
    let results= json.results
    if (results.length === 0) {
        resultDiv.innerHTML=""
        notification.innerHTML=""
    }
    else {
        let html= results.map(obj=>`
        <div class='album'>
            <img src=${obj.artworkUrl100}/>
            <h2>${obj.collectionName}</h2>
        </div>`).join('')
        resultDiv.innerHTML+=html
        notification.innerHTML += `${results.length} results`
    }
    
}

function runApp() {
    handleChange()
    handleSubmit()
}

runApp();