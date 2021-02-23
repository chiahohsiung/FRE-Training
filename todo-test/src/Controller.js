// MVC,
import { Model } from "./Model.js"
import * as listeners from "./listeners/listeners.js"

const AppController = ((model) => {
    const state = new model.State()
    const init = () => {
        console.log("getting todos")
        model.getAllTodos().then((data) => {
            state.todolist = data
            listeners.addListenerOnRemove(state, model)
            listeners.addListenerOnInput(state, model)
        })
    }
    return {
        init,
    }
})(Model)

AppController.init()
