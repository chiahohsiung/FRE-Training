const API = (() => {
    const baseurl = "https://jsonplaceholder.typicode.com";
    const todoPath = "todos";
    const getToDoAPI = () => {
        return fetch(baseurl + "/" + todoPath).then((response) => {
            return response.json();
        });
    };
    const deleteToDo = (id) => {
        console.log(id);
        document.getElementById(id).remove();
    };
    return {
        getToDoAPI,
        deleteToDo,
    };
})();

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
init();
