// MVC, MVVM
const todoAPI = (() => {
    const baseurl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([baseurl, todoPath].join('/'))
            .then((response) => response.json());

    const deleteTodo = (id) => 
        fetch([baseurl, todoPath, id].join('/'), {
            method: 'DELETE',
        });

    return {
        getAllTodos,
        deleteTodo
    }
})();

        todoArray.forEach(ele => {
            template += `
                <li>
                    <span>${ele.title}</span>
                    <button class="btn-remove" id="${ele.id}">X</button>
                </li>
            `;
        });
        return template;
    }

    return {
        domString,
        render,
        inittodolsitTmp
    }
};

const Module = ((api, view) => {
    class Todo {
        constructor(userId, id, title, completed) {
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }

    class State {
        #todolist = [];

        get todolist() {
            return this.#todolist;
        }
        set todolist(newlist) {
            this.#todolist = newlist;

            const todoElement = document.querySelector('#' + view.domString.todolist);
            const htmltmp = view.inittodolsitTmp(this.#todolist);
            view.render(todoElement, htmltmp);

            // const removebtns = document.querySelectorAll('.' + view.domString.removebtn);
            // removebtns.forEach(rembtn => {
            //     rembtn.addEventListener('click', (event) => {
            //         console.log(event.target.id);
            //         this.todolist = this.todolist.filter(todo => +todo.id !== +event.target.id);
            //         deleteTodo(+event.target.id);
            //     });
            // });
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;

    return {
        Todo,
        State,
        getAllTodos,
        deleteTodo
    }
})(todoAPI, View);

const AppController = ((view, module) => {
    const state = new module.State();

    const addListenerOnRemove = () => {
        const todoElement = document.querySelector('#' + view.domString.todolist);
        todoElement.addEventListener('click', (event) => {
            state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);
            module.deleteTodo(+event.target.id);
        });
    }

    const init = () => {
        module.getAllTodos().then(data => {
            state.todolist = data;
            addListenerOnRemove();
        });
    }
    return {
        init
    }
})(View, Module);

AppController.init();

$( "button.continue" ).html( "Next Step..." )
