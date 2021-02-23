// MVC, MVVM

//HTTP METHODS:
const API= (()=>{
    const baseURL=''
    const Path=''
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

//RENDER HTMLS:
const View= (()=>{
    const domString = {
        list: 'content',
        input:'input',
        removeButton: 'btn-remove',

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


const Module= ((api,view) =>{
    class Item {
        constructor(){

        }
    }
    class State {
        #list = [];
        #input='';

        get input(){
            return this.#input;
        }
        set input(value){
            this.#input= value;
            const element= document.querySelector('#'+ view.domString.input)
            element.value= this.#input
        }

        get list(){
            return this.#list;
        }
        set list(newList){
            this.#list= newList;
            const element= document.querySelector('#'+ View.domString.list)
            const htmlTmp= view.initListTmp(this.#list)
            wiew.render(element,htmlTmp)
        }
    }
    const getAllItems= api.getItems
    const deleteItem= api.deleteItem

    return (Item, State,getAllItems,deleteItem)
})(API, View)

const AppController = ((view,module)=>{
    const state = new module.State()

    const addListeneronInput= ()=>{
        const element= document.querySelector('#'+ view.domString.input)
        element.addEventListener('keyup', (event)=>{
            if (event.key === 'Enter'){
                state.input= event.target.value
            }
            const newItem= new module.item(1, state,input, false)
            module.insertItem(newItem).then(data=>{
                console.log(data)
                state.list= [data, ...state.list]
            })
            state.input= ''
        })
    }

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
            addListenerOnRemove;
            addListeneronInput;
        })

    }
    return {init}

})(View,Module)

AppController.init();

//$("button.nav__button").html("Next Step")