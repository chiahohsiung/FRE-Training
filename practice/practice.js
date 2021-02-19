//Json place holder
const url = "https://jsonplaceholder.typicode.com/posts/1";

//write a precess function
const processPost = (json) => {
    let obj;
    try{
        obj = JSON.parse(json);
    }catch{
        obj = json;
    }
    console.log(`The user Id is ${obj.userId}. \nTitle: ${obj.title}`);
}

//1. Ajax practice
const getPost = (url) =>{
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if(ajax.readyState === XMLHttpRequest.DONE){
            if(ajax.status === 200){
                //do work on the response data
                processPost(ajax.responseText);
            }else{
                console.error("Error");
            }
        }
    }
    ajax.open('GET', url);
    ajax.send();
}
getPost(url);
// The user Id is 1. 
// Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit


//2. Fetch API: return a promise to process the response
fetch(url)
    .then(response => response.json()) //process Response Object
    .then(data => processPost(data));
// The user Id is 1. 
// Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit


//3. Write myFetch using promise

const myFetch = (url) => {
    let fetchPromise = new Promise( (resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = () => {
            if(ajax.readyState === XMLHttpRequest.DONE){
                if(ajax.state === 200){
                    resolve(ajax.responseText);
                }else{
                    reject(new Error())
                }
            }
        }
        ajax.open('GET', url);
        ajax.send();
    })
    return fetchPromise;
}
console.log(myFetch(url));