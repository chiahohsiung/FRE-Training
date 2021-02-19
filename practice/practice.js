//Json place holder
const url = "https://jsonplaceholder.typicode.com/posts/1";

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
const postParams = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
}
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

// fetch(postUrl, postParams)
//     .then(response => response.json())
//     .then(data => console.log(data))
//{title: "foo", body: "bar", userId: 1, id: 101}

//3. Write myFetch using promise

const myFetch = (url, options) => {
    let method = 'GET';
    if(options){
        method = options.method;
    }

    let fetchPromise = new Promise( (resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(method, url, true);
        ajax.onreadystatechange = () => {
            if(ajax.readyState === XMLHttpRequest.DONE){
                if(ajax.status >= 200 && ajax.status <= 300){
                    resolve(ajax.response);
                }else{
                    reject({
                        state: ajax.readyState,
                        status: ajax.status
                    })
                }
            }
        }
        ajax.send(options.body);
    })
    return fetchPromise;
}
myFetch(url)
    .then(response => console.log(JSON.parse(response)))
    //{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"}
myFetch(postUrl, postParams)
    .then(response => console.log(response))
    //{title: "foo", body: "bar", userId: 1, id: 101}