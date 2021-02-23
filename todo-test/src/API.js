const API = (() => {
    const baseurl = "https://jsonplaceholder.typicode.com"
    const todoPath = "todos"
    console.log()

    const getAllTodos = () =>
        fetch([baseurl, todoPath].join("/")).then((response) => {
            return response.json()
        })

    const deleteTodo = (id) =>
        fetch([baseurl, todoPath, id].join("/"), {
            method: "DELETE",
        })

    const addTodo = (newtodo) =>
        fetch([baseurl, todoPath].join("/"), {
            method: "POST",
            body: JSON.stringify(newtodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json())

    return {
        getAllTodos,
        deleteTodo,
        addTodo,
    }
})()

export { API }
