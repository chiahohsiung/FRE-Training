// const searchAdd = document.querySelector(".searchResult")
const inputValue = document.querySelector("#search_input")

inputValue.addEventListener('keyup', (event) => {
    // console.log(event.keyCode);
    if (event.key === 'Enter') {


        inputValue.value = event.target.value;



    }
});
const searchName = inputValue;
const baseurl = "https://itunes.apple.com/search"
const singerPath = `?term=${'taylor'}& media=music & entity=album & attribute=artistTerm & limit=500"`




const fetchData = (async (url = '') => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.json();



});



const dealData = async () => {

    await fetchData([baseurl, singerPath].join('')).then(data => console.log(data));
    const data = await fetchData([baseurl, singerPath].join(''));
    console.log(data);


    // const searchAdd = document.querySelector(".searchResult")
    const inputValue = document.querySelector("#search_input")
    await inputValue.addEventListener('keyup', (event) => {
        console.log(event.keyCode);
        if (event.key === 'Enter') {


            // inputValue.value = event.target.value;
            // console.log(event.target.value)

            const div1add = document.createElement('div')
            const div2add = document.createElement('div')
            div2add.classList.add("flexGrid")
            let template = '<div class="card>';
            for (i = 0; i <= data[resultCount]; i++) {

                template += `<img class="card_img" src="${data[results][i][artworkUrl100]}>"</div>`
            }
            div2add.innerHTML = template
            div1add.innerHTML = `${data[resultCount]} result for ${inputValue.value}`
            searchAdd.appendChild(div1add);
            searchAdd.appendChild(div2add);

        }
    });

    // const baseurl = "https://itunes.apple.com/search"
    // const singerPath = `?term=${inputValue.value}& media=music & entity=album & attribute=artistTerm & limit=500"`
    // getData([baseurl, singerPath].join('')).then(data => console.log(data))


}

dealData()








