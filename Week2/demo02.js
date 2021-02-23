// ES6 OBJ DESTRUCTURE

const arr=[
    {name:'Dio'},
]
console.log(arr)

//THIS: call vs apply 

//BINDING PROBLEM | ARROW FUNCTION

// LIMITED FUNC | SET TIMEOUT

// CALL STACK | ASYNC API | WEB API

// MESSAGE QUEUE | TASK QUEUE

// VAR vs LET (visual respresentation of event loop)

// CALLBACK HELD (PROMISE)

//XHR:

// function getUser(cb,id){
//     var xhttp = new XMLHttpRequest();
//     const url='https://jsonplaceholder.typicode.com/todos/'
//     xhttp.open("GET",url+id, true);
//     xhttp.send();

//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         document.getElementById("demo").innerHTML = xhttp.responseText;
//         }
//     };   
// }
// function getUserPromise(id){
//     return new Promise((resolve,reject)=>{
//         var xhttp = new XMLHttpRequest();
//         const url='https://jsonplaceholder.typicode.com/todos/'
//         xhttp.open("GET",url+id, true);
//         xhttp.send();

//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             // document.getElementById("demo").innerHTML = xhttp.responseText;
//             const data= JSON.parse(xhttp.response)
//             resolve(data)
//             }
//         };  
//         xhttp.send() 
//     })
// }
// getUserPromise(5).then(data=>{
//     print(data)
//     return getUserPromise(12)
// })

//PROMISE:

// class MyPromise {
//     thenCallBackQueue = [];
//     currentData;
//     constructor(executor){
//         executor(this.resolve.bind(this),this.reject)
//     }
//     resolve(data){
//         //console.log(this)
//         if (!this.thenCallBackQueue.length) return;
//         this.currentData= data
//         while (this.thenCallBackQueue.length){
//             const cb = this.thenCallBackQueue.shift()

//             if (this.currentData instanceof MyPromise){
//                 this.currentData.then(dataFromRes=>{
//                     this.currentData= cb(dataFromRes)
//                 })
//             } else {
//                 this.currentData= cb(this.currentData)
//             }
            
//         }
        
//     }

//     reject(){}

//     then(thenCallBackFunc){
//         this.thenCallBackQueue.push(thenCallBackFunc)
//     }

//     catch(){}
// }
// const getRandomTime = ()=>{
//     return Math.floor(Math.random()* 6)
// }

// const p1= new MyPromise((resolve,reject)=>{
//     const timer= getRandomTime()
//     console.log(`${timer}s`);
//     setTimeout(()=>{
//          console.log('I promise')
//          resolve('hello')
//          }, timer * 1000)
// }).then(data=> console.log(data))

// console.log(p1)

// push, pop, shift, unshift (stack vs queue)

// const p= new Promise ((resolve, reject)=>{
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
    // if (timer>2) {
    //     setTimeout(()=>{
    //         console.log('I promise')
    //         resolve('hello')
    //     }, timer * 1000)
    // } else {
    //     reject(`error occurs`)
    // }  
//})
// .then((data)=>{
//     console.log(data)
//     return `${data} 2nd time`
// }).then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))
// console.log(p)

//ASYNC | AWAIT

// async function getUserAsync() {
//     try {
//         const data5 = await getUserPromise(5)
//         print (data5)
//     } catch(err) {
//         console.log(err)
//     }
// }
// getUserAsync()

//promiss All