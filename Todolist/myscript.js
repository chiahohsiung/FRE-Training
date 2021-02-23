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

