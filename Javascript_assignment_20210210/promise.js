// var p = new Promise(function(resolve, reject){
//     //做一些异步操作
//     setTimeout(function(){
//         console.log('执行完成');
//         resolve('随便什么数据');
//     }, 1000);
// });

// p.then((para)=> para);



// runAsync1 = function () {
    
//     let p = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('异步1执行完成');
//             resolve('随便什么数据1');
//         }, 1000);
//     })
     
//     return p;
        
// }

// runAsync2 = function () {
    
//     let p = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('异步2执行完成');
//             resolve('随便什么数据2');
//         }, 1000);
//     })
     
//     return p;
        
// }

// runAsync3 = function () {
    
//     let p = new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('异步3执行完成');
//             resolve('随便什么数据3');
//         }, 1000);
//     })
     
//     return p;
        
// }

// runAsync1().then((data)=> {
//     console.log(data); 
//     return runAsync2()
// }).then((data)=> {
//     console.log(data);
//     return runAsync3();
// }).then((data)=>{
//     console.log(data);
// }).then(data => console.log(data));




// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     return '直接返回数据';  //这里直接返回数据
// })
// .then(function(data){
//     console.log(data);
// }).then(data => console.log(data));




// Promise.all([runAsync1(), runAsync2(), runAsync3()]).then((results)=>console.log(results));


///////////////////////////////////////////////////////////////////////////
///////////////////////////////执行顺序疑惑/////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// getNumber = () => {
//     let p = new Promise(function(resolve, reject){
//         let num = Math.ceil(Math.random()*10);
//         if (num <= 5){
            
//             resolve(num);
//         } else {
//             reject("Number is too large");
//         }
//     })
//     return p;
// }

// getNumber().then((data)=>{
//     console.log("执行成功");
//     console.log(data);
// }).catch((data)=>{
//     console.log("执行失败");
//     console.log(data);
// });
// console.log("此语句先执行， 因为前面是异步");



///////////////////////////////////////////////////////////////////////
/////注意promise中then和catch到底返回的是什么////////////////////////////
///////////////////////////////////////////////////////////////////////
// var example = new Promise((resolve, reject)=>{
//     let i = 1;
//     reject(i);
// })
// example
// .catch((para)=>{console.log('我是第一个catch的回调函数'); return para;})
// .then((para) =>{console.log('我是第一个then的回调函数'); console.log(para);    throw Error    })
// .catch((para)=>{console.log('我是第二个catch的回调函数'); console.log(para);})
// .then((para) => {console.log('我是第二个then的回调函数'); console.log(para);})



///////////////////////////////////////////////////////////////////////////////
/////////////////then或catch中throw error的话自动跳到下一个catch///////////////
/////////////////////////////////////////////////////////////////////////////
// var example = new Promise((resolve, reject)=>{
//     let i = 1;
//     reject(i);
// })
// example
// .catch((para)=>{console.log('我是第一个catch的回调函数'); console.log(para); throw "error!!!!!";})
// .then((para) =>{console.log('我是第一个then的回调函数'); console.log(para);    throw Error    })
// .catch((para)=>{console.log('我是第二个catch的回调函数'); console.log(para);})
// .then((para) => {console.log('我是第二个then的回调函数'); console.log(para);})


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// var example = new Promise((resolve, reject) => {
//     console.log("成功执行");
//     resolve(1);
// })
// example.then((para) => {console.log(para);
//     para++;
//     return para;
// }).then((para) => {
//     console.log(para);
// })




/////////////////////////////////////////////////////////////////////////////////
/////////////////////resolve和reject区别问题//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// asyncF = function () {
//     let p = new Promise((resolve, reject) => {
//         console.log(1);
//         reject("失败");
//         resolve("成功");
//         console.log(2);
//         reject("失败");
//     })
//     return p;
// }
// asyncF().then((para) => {console.log(para);})
// .catch((para) => {console.log(para);});

//////////////////////////////////////抛出一个错误，大多数时候将调用catch方法
// var p1 = new Promise(function(resolve, reject) {
//     throw 'Uh-oh!';
//   });
  
//   p1.catch(function(e) {
//     console.log(e); // "Uh-oh!"
//   });



////////////////////////// 在异步函数中抛出的错误不会被catch捕获到
// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     throw 'Uncaught Exception!';
//   }, 1000);
// });

// p2.catch(function(e) {
//   console.log(e); // 不会执行
// });




///////////////////////////////////// 用reject总会被catch捕获到
// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     reject('错误!');
//   }, 1000);
// });

// p2.catch(function(e) {
//   console.log(e); // 会执行
// });





//////////////////////////////////////////////////////////////////////////////
/////////////////**********执行顺序的问题*********/////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// setTimeout(() => console.log(1), 0);
// let p = new Promise((resolve, reject) => {
//     for (let i = 2; i < 6; i++) {
//         console.log(i);
//     }
//     resolve(7);
//     console.log(6);
// })

// p.then((para) => console.log(para));

// (function () {
//     console.log(8);
// })();

// console.log(9);



///////////////////////////////////////////////////////////////////////////////
/////////注意与前面区别， Promise里面除了resolve和reject之外是先被执行的///////////
///////////////////////////////////////////////////////////////////////////////

// let p = new Promise ((resolve, reject) => {
//     // if (4 > 3){
//     //     resolve("success!");
//     // }
//     console.log("我先被执行");
//     resolve("我最后被执行");
//     console.log("我第二被执行");
    

// });

// p.then((para) => console.log(para));
// console.log("我第三被执行");



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////




// let p = new Promise ((resolve, reject) => {
    
//     setTimeout(() => {console.log("我第四被执行"); resolve();}, 2000);
//     setTimeout(() => {console.log("我第二被执行"); reject();}, 1000);
    
// });

// p.then((para) => console.log(para))  
// .catch((para) => console.log(para));  /////////////第三被执行 undefined
// console.log("我先被执行");


// let p = new Promise ((resolve, reject) => {
    
//     console.log("我先被执行");
//     resolve();
//     reject();
//     console.log("我第二被执行")
    
// });

// p.then((para) => console.log(para))  //////////第四被执行 undefined
// .catch((para) => console.log(para));
// console.log("我第三被执行");





/////////////////////////////////////////////////////////////////////////////////
///////////Promise fetch data 的用法/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const getRandomTime = () => {
//     return Math.floor(Math.random() * 5);
// }

// function print(data) {
//     console.log(data);
// }

// function getUserPromise(id) {
//     return new Promise((resolve, reject) => {
//         var xhttp = new XMLHttpRequest();
//         const url = 'https://jsonplaceholder.typicode.com/posts/';
//         xhttp.open("GET", url + id, true);
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // Typical action to be performed when the document is ready:
//                 const data = JSON.parse(xhttp.response);
//                 resolve(data); // <------------
//             }
//         };
//         xhttp.send();
//     })
// }

// getUserPromise(5)
//     .then(data => {
//         print(data);
//         return getUserPromise(12);
//     })
//     .then(data => {
//         print(data);
//         return getUserPromise(3);
//     })
//     .then(data => print(data));



//////////////////////////////////////////////////////////////////////////////
//////////////////////一些例子/////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// const getRandomTime = () => {
//     return Math.floor(Math.random() * 5);
// }



// const p = new Promise((resolve, reject) => {
//     const timer = getRandomTime();
//     console.log(`${timer}s`);
//     setTimeout(() => {
//         console.log('promise');
//         resolve('hello');
//     }, timer * 1000);
//     reject('1111');   ///////////////注意因为reject比resolve先执行，因此状态变成reject了
// })

// p.then(data => {
//     console.log(data);
//     return new Promise((res, rej) => {
//         res('Dio');
//     });
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));



///////////////////////////////////////////////////////////////////////////
///////////////注意顺序///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// console.log(1);
// const p = new Promise((resolve, reject) => {
//     resolve(2)
// }).then(data => console.log(data)); 
// console.log(3);  //////1 3 2


///////////////////////////////////////////////////////////////////////////


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// console.log(promise3.then(data => console.log(4))); ////console.log 时 Promise是pending状态


// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });