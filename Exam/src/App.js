import * as listeners from "./listeners/listeners.js"
import { Model } from "./Model.js"
const controller = ((model) => {
    const state = new model.State()
    const init = () => {
        console.log("getting started")
        listeners.addSubmitListener(state, model)
    }
    return {
        init,
    }
})(Model)

controller.init()
