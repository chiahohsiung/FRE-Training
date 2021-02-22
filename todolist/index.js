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

    const addTodo = (newtodo) =>
        fetch([baseurl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());

    return {
        getAllTodos,
        deleteTodo,
        addTodo
    }
})();

const View = (() => {
    const domString = {
        todolist: 'todolist-content',
        removebtn: 'btn-remove',
        todoinput: 'todolist__input'
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate;
    }
    const inittodolsitTmp = (todoArray) => {
        let template = '';
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
})();

const Model = ((api, view) => {
    class Todo {
        constructor(userId, title, completed) {
            this.userId = userId;
            this.title = title;
            this.completed = completed;
        }
    }

    class State {
        #todolist = [];
        #todoinput = '';

        get todoinput() {
            return this.#todoinput;
        }
        set todoinput(inputvalue) {
            this.#todoinput = inputvalue;

            const todoInputEle = document.querySelector('#' + view.domString.todoinput);
            todoInputEle.value = this.#todoinput;
        }

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
    const addTodo = api.addTodo;

    return {
        Todo,
        State,
        getAllTodos,
        deleteTodo,
        addTodo
    }
})(todoAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();

    const addListenerOnInput = () => {
        const todoInputEle = document.querySelector('#' + view.domString.todoinput);
        todoInputEle.addEventListener('keyup', (event) => {
            
            if (event.key === 'Enter') {
                state.todoinput = event.target.value;
                
                const newtodo = new model.Todo(1, state.todoinput, false);

                model.addTodo(newtodo).then(data => {
                    console.log(data);
                    state.todolist = [data, ...state.todolist];
                });
                state.todoinput = '';
            }
        });
    }

    const addListenerOnRemove = () => {
        const todoElement = document.querySelector('#' + view.domString.todolist);
        todoElement.addEventListener('click', (event) => {
            state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);
            model.deleteTodo(+event.target.id);
        });
    }

    const init = () => {
        model.getAllTodos().then(data => {
            state.todolist = data;
            addListenerOnRemove();
            addListenerOnInput();
        });
    }
    return {
        init
    }
})(View, Model);

AppController.init();

// $( "button.continue" ).html( "Next Step..." )
