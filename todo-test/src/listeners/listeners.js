import { View } from "../View.js"

const addListenerOnInput = (state, model) => {
    const todoInputEle = document.querySelector(
        "#" + View.domString.todoinput
    )
    todoInputEle.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            state.todoinput = event.target.value

            const newtodo = new model.Todo(1, state.todoinput, false)

            model.addTodo(newtodo).then((data) => {
                console.log(data)
                state.todolist = [data, ...state.todolist]
            })
            state.todoinput = ""
        }
    })
}
const addListenerOnRemove = (state, model) => {
    const todoElement = document.querySelector(
        "#" + View.domString.todolist
    )
    todoElement.addEventListener("click", (event) => {
        // state.todolist = state.todolist.filter(
        //     (todo) => +todo.id !== +event.target.id
        // )
        let id = event.target.id
        updateTodo(state, id)
        // model.deleteTodo(+event.target.id)
    })
}
const updateTodo = (state, id) => {
    ;[].indexOf()
    let index = state.todolist.indexOf(find((todo) => +todo.id == id))
    let todo = state.todolist.find((todo) => +todo.id === id)

    let tempTodo = state.todolist[index]
    // state.todolist[index] = { ...tempTodo, completed: true }
    console.log(state.todolist[index], index, todo, +id)
}

export { addListenerOnInput, addListenerOnRemove }
