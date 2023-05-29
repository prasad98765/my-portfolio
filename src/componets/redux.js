import { legacy_createStore } from "redux";

function reducer(state = {value :0},action) {
    switch(action.type){
        case "Increment":
            return {value : state + 1}
        default :
            return state
    }
}

const store = legacy_createStore(reducer)

store.subcribe(() => console.log(store.getSate()))

store.dispatch({type : "Increment"})