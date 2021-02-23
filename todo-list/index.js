// MVC

const todoAPI = (() => {
  const getAll = () =>
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .catch(err => console.error(err))

    return{getAll}
})();

const View = (() => {
  const domString = {
    todoList: 'todo-content'
  }
  return {
    domString
  }
}) ();

const ele = document.querySelector('#' + View.domString.todoList);
ele.addEventListener("click", (e) => console.log(e.target))

const remove = id => {
  document.querySelector(`#item${id}`).remove();
}


const render = (() => {
  template =''
  todoAPI.getAll().then(data => {
    data.forEach(ele => {
    template += `
    <li id='item${ele.id}'">
      <span>${ele.title}</span>
      <i class="btn-remove fas fa-times-circle" onclick='remove(${ele.id})'></i>
    </li>
    `;
  })
  return template
})
  .then(template => ele.innerHTML = template)
})();

