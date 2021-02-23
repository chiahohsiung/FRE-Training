import { API } from "./API.js"
import { View } from "./View.js"

const Model = ((api, view) => {
    class Todo {
        constructor(userId, title, completed) {
            this.userId = userId
            this.title = title
            this.completed = completed
        }
    }

    class State {
        #todolist = []
        #todoinput = ""

        get todoinput() {
            return this.#todoinput
        }
        set todoinput(inputvalue) {
            this.#todoinput = inputvalue

            const todoInputEle = document.querySelector(
                "#" + view.domString.todoinput
            )
            todoInputEle.value = this.#todoinput
        }

        get todolist() {
            return this.#todolist
        }
        set todolist(newlist) {
            this.#todolist = newlist
            const todoElement = document.querySelector(
                "#" + view.domString.todolist
            )
            const htmltmp = view.init_toto_list_template(
                this.#todolist
            )
            view.render(todoElement, htmltmp)

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

    const { getAllTodos, deleteTodo, addTodo } = api

    return {
        Todo,
        State,
        getAllTodos,
        deleteTodo,
        addTodo,
    }
})(API, View)
export { Model }
