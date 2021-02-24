//WITH JQUERY

function getResults(artist){
    const url= createURL(artist)
    fetch(url)
        .then(res=>res.json())
        .then(json=>{
            let array= json.results
            if (artist.length>0) {
                $('.notification').html(`${array.length} results for "${artist}"`)
                $('.default').hide()
                $('.notification').show()
                displayResults(array)
            }
            else {
                $('.notification').hide()
                $('.default').show()
            }
            
        })
        .catch(err=>console.log(err))
}

function displayResults(array=[]){
    let html= array.map(obj=>`
            <div class='album'>
                <img src=${obj.artworkUrl100}/>
                <h2>${obj.collectionName}</h2>
            </div>`).join('')
    $('.results').html(html)
}

const createURL= (artist)=>{
    let baseURL= 'https://itunes.apple.com/search?'
    let params= {
        term: artist,
        media:'music',
        entity: 'album',
        attribute: 'artistTerm',
        limit: 100
    }
    return baseURL+$.param(params)
}

function change(){
    $('#search_input').on("change paste keyup",function(){
        let val = $('#search_input').val()
        getResults(val)
    })
}
function submit(){
    $('#search_form').on("submit",function(e){
        e.preventDefault()
        let val = $('#search_input').val()
        getResults(val)
    })
}
function runApp(){
    change();
    submit()
   
}

$(runApp)


//WITHOUT JQUERY

/*
const form = document.querySelector('#search_form')
const input= document.querySelector('#search_input')
const resultDiv= document.querySelector('.results')
const notification= document.querySelector('.notification')

const createURl= artist=>`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=500`

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
*/