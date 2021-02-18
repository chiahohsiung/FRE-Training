document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementsByTagName("div");
  // random id generator
  function genID() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

  // loading and add function
  const populateList = (input) => {
    let isComplete = false;

    const id = genID();
    const div = document.createElement("div");
    div.className = id;
    const ul = document.getElementsByTagName("ul");
    const li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add(id, 'false')
    // checkBox.addEventListener('click', () => {
    //   for (let i = 0; i < list.length; i++) {
    //     const item = list[i];
    //     if (item.className === checkBox.className) {
    //       !isComplete
    //       if (isComplete){
    //         item.style.textDecoration = "line-through"
    //       } else {

    //       }
    //     }
    //   }

    })
    const editBtn = document.createElement("button");
    editBtn.className = id;
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.className === editBtn.className) {
          const input = document.createElement("input");
          const editInput = li.innerHTML;
          input.value = editInput;
          input.className = "edit_input";
          li.innerHTML = "";
          li.appendChild(input);
          console.log("edit input", editInput);

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

          console.log("inside edit loop");
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

  // iterate thru the list, if the classname id matches the classname of what's being clicked, splice that out
});
