const api = (() => {
    const getalltodolists = () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
        response.json()
      );
  
    const deletetodolist = (id) =>
      fetch("https://jsonplaceholder.typicode.com/todos/" + id.toString(), {
        method: "DELETE",
      });
  
    const addtodolist = (newtodo) =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title: newtodo.title,
          userId: 1,
          completed: newtodo.completed
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
      
    return {
      getalltodolists,
      deletetodolist,
      addtodolist
    };
  })();
  
  const View = (() => {
    const render = (state) => {
      let domElm = document.querySelector("#todolist-ul");
      let alltodolists = "";
      state.forEach((ele) => {
        alltodolists += `
        <li id="${ele.id}">
            ${ele.title}
            <button id="${ele.id}">x</button>
        </li>
        `;
      });
      domElm.innerHTML = alltodolists;
    };
  
    return {
      render,
    };
  })();
  
  const Model = ((api, view) => {
    class State {
      todolistsstate = [];
      get state() {
        return this.todolistsstate;
      }
      set state(todolists) {
        this.todolistsstate = todolists;
        View.render(this.todolistsstate);
      }
    }
  
    const gettodolists = api.getalltodolists;
    const delettodolist = api.deletetodolist;
    const addtodolist = api.addtodolist;
  
    return {
      State,
      gettodolists,
      delettodolist,
      addtodolist
    };
  })(api, View);
  
  const Appcontrol = ((view, model) => {
    const todolist = new model.State();
  
    const delettodolist = () => {
      let domEle = document.querySelector("#todolist-ul");
  
      domEle.addEventListener("click", (event) => {
        console.log(event.target.id);
        todolist.state = todolist.state.filter(
          (ele) => +ele.id !== +event.target.id
        );
        model.delettodolist(event.target.id);
      });
    };
  
    const addtodolist = () => {
      let domEle = document.querySelector("#input");
      domEle.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          let newtodo = {
            userId: 1,
            id: (Math.floor(Math.random() * 100) + 200).toString(),
            title: domEle.value,
            completed: false,
          };
          todolist.state = [newtodo, ...todolist.state];
          model.addtodolist(newtodo).then(data=>console.log(data))
        }
      });
    };
  
    const init = () => {
      model.gettodolists().then((data) => {
        todolist.state = data;
        delettodolist();
        addtodolist();
      });
    };
  
    return {
      init,
    };
  })(View, Model);
  
  Appcontrol.init();
  