let fakedata = [{id:1, title:"Cherry"}, {id:2, title:"BOB"}];
let Todolists = [];
function myfunction(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            setTodolist(data)
        })
}



function setTodolist(arr){
    arr.forEach(ele=>Todolists.push(ele))
    printTodolist(Todolists)
    Deletefunction();
}

function printTodolist(arr){
    let newEle = document.querySelector(".todolist-ul");
    let alltitles = "";
    arr.forEach(element => {
        alltitles+= `<li>
                        ${element.title}
                        <button id="${element.id}"> X </button>
                     </li>`
    });
    newEle.innerHTML = alltitles
}

function Deletefunction(){
    let delEle = document.querySelector(".todolist-ul")
    delEle.addEventListener('click', (event) => {
        console.log(event.target.id)
        Todolists = Todolists.filter(todo => todo.id+"" !== event.target.id);
        printTodolist(Todolists)
    });
}

function addToList(){

    let theTitle = document.querySelector("#input").value;
    let newTodo = {
        id: (Math.floor(Math.random() * 100) + 200).toString(),
        title: theTitle
    }
    Todolists.push(newTodo);
    printTodolist(Todolists);
}
myfunction()

//////////////////////////
//////////////////////////
//////////////////////////
// const ToDoListApi = (() => {
//     const getAllToDoLists = () => 
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then((response) => response.json());
    
//     return{
//         getAllToDoLists
//     };
// })();

// const View = (()=>{
//     const render = (arr) => {
//         let alltodolists = ""
//         let domEle = document.querySelector(".todolist-ul")
//         arr.forEach(element => {
//             alltodolists+=`
//             <li>
//                 ${element.title}
//                 <button id = ${element.id}> X </button>
//             </li>    
//             `
//         });
//         domEle.innerHTML = alltodolists;
//     }

//     return{
//         render
//     }
// })();

// const Module = (() => {
//     let TodoLists = [];

//     function getTodoLists() {
//         return TodoLists
//     }

//     function setTodoList(data){
//         data.forEach(ele => TodoLists.push(ele))
//     }

//     function addTodoList(data){
//         TodoLists.push(data)
//     }

//     return{
//         getTodoLists,
//         setTodoList,
//         addTodoList,
//         TodoLists
//     }
// })();

// const AppController = ((View, module)=>{
//     function deleteList(){
//             let delEle = document.querySelector(".todolist-ul")
//             delEle.addEventListener('click', (event) => {
//                 console.log(event.target.id)
//                 module.setTodoList(module.getTodoLists().filter(todo => todo.id+"" !== event.target.id));
//                 View.render(module.getTodoLists())
//             });
//         }
//     function addToList(){
//             let theTitle = document.querySelector("#input").value;
//             let newTodo = {
//                 id: (Math.floor(Math.random() * 100) + 200).toString(),
//                 title: theTitle
//             }
//             module.addTodoList(newTodo);
//             View.render(module.Todolists)
//         }

//     function init(){
//         ToDoListApi.getAllToDoLists().then(data => {
//             console.log(data)
//             module.setTodoList(data);
//             View.render(module.getTodoLists());
//             deleteList();
//             addToList()
//         })
//     }
//     return{
//         init
//     }
// })(View, Module)

// AppController.init();