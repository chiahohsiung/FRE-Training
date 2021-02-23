// MVC, MVVM

const API= (()=>{
    const baseURL='https://jsonplaceholder.typicode.com'
    const Path='todos'
    const url=[baseURL,Path].join('/')

    const getAllItems= ()=>
        fetch(url).then(res=>res.json())
    
    const deleteItem=(id)=>
        fetch([url,id].join('/'),{
            method: 'DELETE',
        })
    const insertItem=(item)=>
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(item),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        },
    }).then(res=>res.json())    

    return {getAllItems,deleteItem,insertItem}
})();

const View= (()=>{
    const domString = {
        list: 'list-content',
        removeButton: 'btn-remove'
    }
    const render = (element,htmlTmp)=>{
        element.innerHTML= htmlTmp
    }
    const initListTmp = (arr)=>{
        return arr.map((item,index)=>`
            <li key="${index}">
                <span>${item.title}</span>
                <button class='btn-remove' id="${item.id}">X</button>
            </li>
        `).join('')
    }
    return { domString, render, initListTmp}
})();

API.getAllItems().then(data=>{
    let html= View.initListTmp(data)
    $('.todoList').html(html)
    console.log(data[0])
})

const Module= ((api,view) =>{
    class Item {
        constructor(userId, id, title, completed){
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }
    class State {
        #list = []

        get list(){
            return this.#list;
        }
        set list(newList){
            this.#list= newList;
            const element= document.querySelector('#'+ View.domString.list)
            const htmlTmp= view.initListTmp(this.#list)
            view.render(element,htmlTmp)
        }
    }
    const getAllItems= api.getAllItems
    const deleteItem= api.deleteItem

    return {Item, State,getAllItems,deleteItem}
})(API, View)

const state= new Module.Item()
console.log(state)

const AppController = ((view,module)=>{
    const state = new module.State()

    const addListenerOnRemove= ()=>{
        const element= document.querySelector('#'+ view.domString.list)
        element.addEventListener('click', event=>{
            state.list= state.list.filter(item=> +item.id !== event.target.id)
            module.deleteItem(+event.target.id)
        })
    }
    const init=()=>{
        module.getAllItems().then(data=>{
            state.list = data;
            addListenerOnRemove()
        })

    }
    return {init}

})(View,Module)

AppController.init();

$("button.nav__button").html("Next Step")