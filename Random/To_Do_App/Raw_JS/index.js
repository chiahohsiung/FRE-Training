const API = (() => {
    const baseurl = "https://jsonplaceholder.typicode.com";
    const todoPath = "todos";
    const getToDoAPI = () => {
        return fetch(baseurl + "/" + todoPath).then((response) => {
            return response.json();
        });
    };
    const deleteToDo = (id) => {
        return fetch(baseurl + "/" + todoPath + "/" + id).then((response)=>{
            return response.json()
        });
    };
    return {
        getToDoAPI,
        deleteToDo,
    };
})();

const View = (()=>{
    const constructList = (todoArray) =>{
        let element = "";
        todoArray.forEach(item =>{
            element +=
            '<li class = "todo_list" id = "' +
            item.id +
            '">' +
            item.title +
            '<span class = "button_position"> <button onclick = "API.deleteToDo(' +
            item.id +
            ')" id = "' + item.id + '"> X </button> </span>' +
            "</li>";           
        });
        return element;
    }
    const render = (element, template) =>{
        return element.innerHTML = template;
    }
    return {
        constructList,
        render
    }
})();

class State{
    todoArray = [];
    constructor(){
    }
    removeToDo = (id, todo) =>{
        this.todoArray = todo.filter(todo => +todo.id !== +id);
    }
    setToDo = (list) =>{
        this.todoArray = [...list];
    }
}

const start = () =>{
    let element = document.getElementById("todo_list");
    const state = new State();
    API.getToDoAPI()
    .then(data =>{
        state.setToDo(data);
        const template = View.constructList(state.todoArray);
        View.render(element, template);
    });

    const addRemove = () =>{
        element.addEventListener('click', event =>{
            API.deleteToDo(event.target.id);
            state.removeToDo(event.target.id, state.todoArray);
            const temp = View.constructList(state.todoArray);
            View.render(element, temp);
        })
    }
    addRemove();
}

start();


const init = () => {
    let element = document.getElementById("todo_list");
    API.getToDoAPI().then((data) => {
        data.forEach((item) => {
            //console.log(item);
            element.innerHTML +=
                '<li class = "todo_list" id = "' +
                item.id +
                '">' +
                item.title +
                '<span class = "button_position"> <button onclick = "API.deleteToDo(' +
                item.id +
                ')"> X </button> </span>' +
                "</li>";
        });
    });
};
//init();
