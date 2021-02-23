const View = (() => {
    const domString = {
        todolist: "todolist-content",
        removebtn: "btn-remove",
        todoinput: "todolist__input",
    }
    const render = (element, htmlTemplate) => {
        element.innerHTML = htmlTemplate
    }
    const init_toto_list_template = (todoArray) => {
        let template = ""
        todoArray.forEach((ele) => {
            template += `
                <li>
                    <span>${ele.title}</span>
                    <button class="btn-remove" id="${ele.id}">X</button>
                </li>
            `
        })
        return template
    }
    return {
        domString,
        render,
        init_toto_list_template,
    }
})()
export { View }
