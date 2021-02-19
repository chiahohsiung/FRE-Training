document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementsByTagName("div");
  // random id generator
  function genID() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

  // loading and add function
  const populateList = (input) => {
    const id = genID();
    const div = document.createElement("div");
    div.className = id;
    const ul = document.getElementsByTagName("ul");
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add(id, "false");
    checkBox.addEventListener("click", () => {
      console.log(checkBox.classList[1]);
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.className === checkBox.classList[0]) {
          let isComplete = JSON.parse(checkBox.classList[1]);
          isComplete = !isComplete;
          checkBox.classList.remove(checkBox.classList[1]);
          checkBox.classList.add(JSON.stringify(isComplete));
          if (isComplete) {
            item.style.textDecoration = "line-through";
          } else {
            item.style.textDecoration = "none";
          }
        }
      }
    });
    const editBtn = document.createElement("button");
    editBtn.className = id;
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.className === editBtn.className) {
          const input = document.createElement("input");
          const editInput = li.innerText;
          input.value = editInput;
          input.className = "edit_input";
          li.innerHTML = "";
          li.appendChild(input);
          const saveBtn = document.createElement("button");
          saveBtn.className = id;
          saveBtn.innerHTML = "Save";
          saveBtn.addEventListener("click", () => {
            const editListInput = document.getElementsByClassName("edit_input")[0];
            editListInput.addEventListener("input", (e) => {
              editListInput.value = e.target.value;
            });
            li.innerHTML = editListInput.value;
            saveBtn.remove();
            div.appendChild(editBtn);
          });
          editBtn.remove();
          div.appendChild(saveBtn);
        }
      }
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.className = id;
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.className === deleteBtn.className) {
          item.remove();
        }
      }
    });
    li.className = id;
    li.append(checkBox, input);
    div.appendChild(li);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);
    ul[0].appendChild(div);
  };

  // load list
  const loadList = async () => {
    try {
      const listURL = "https://api.mocki.io/v1/13f44462";
      const { data } = await axios.get(listURL);
      data.map(({ title }) => {
        populateList(title);
      });
    } catch (err) {
      console.error(err);
      return;
    }
  };

  // run function
  loadList();

  // event listener and functionality for input
  const addTodoInput = document.getElementById("add-todo__input");
  const addTodoButton = document.getElementById("add-todo__add");

  addTodoInput.addEventListener("input", (e) => (addTodoInput.value = e.target.value));
  addTodoButton.addEventListener("click", () => {
    populateList(addTodoInput.value);
    addTodoInput.value = "";
  });

  // filter
  const filter = document.getElementById("todo__filter");
  filter.addEventListener("change", (e) => {
    const ul = document.getElementsByTagName("ul")[0];
    if (e.target.value === "complete") {
      let nodeArrCopy = Array.from(list);
      let clone = document.createDocumentFragment();

      nodeArrCopy.forEach((node, idx) => {
        const li = document.getElementsByTagName("li")[idx];
        let classVal = li.children[0].classList[1];
        console.log(classVal);

        if (classVal === "false") {
          clone.appendChild(node);
        }
      });

      ul.innerHTML = "";
      ul.appendChild(clone);
      console.log("ul inside complete", ul);
    }
    // else if (e.target.value === "incomplete") {
    //   for (let i = 0; i < filterList.length; i++) {
    //     let item = filterList[i];
    //     if (item.classList[1] === "true") {
    //       ul.appendChild(item);
    //     }
    //   }
    // }
    // else if (e.target.value === "view_all") {
    //   for (let i = 0; i < filterList.length; i++) {
    //     let item = filterList[i];
    //     ul.appendChild(item);
    //   }
    // }
  });
});
