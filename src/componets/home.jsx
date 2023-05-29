import React from "react";
import { isMobileView } from "./_utils/commonService";
import { homeData } from "./data";
import myImage from '../componets/assert/images/WhatsApp Image 2023-05-24 at 9.21.00 AM.jpeg'
import '../componets/home.scss'
import { legacy_createStore } from "redux";

export function Home(){


function reducer(state = {value :0},action) {
    switch(action.type){
        case "Increment":
            return {value : state.value + 1}
        case "Decrement" : 
            return { value : state.value - 1}
        default :   
            return state
    }
}
const store = legacy_createStore(reducer)
store.subscribe(() => console.log(store.getState()))
store.dispatch({type : "Increment"})
store.dispatch({type : "Increment"})
store.dispatch({type : "Increment"})
store.dispatch({type : "Decrement"})


    return(
        <>
           <div className="flot-container">
                <div className="flot-child">
                    <div style={{marginTop:isMobileView() ? "70%" : "25%"}}>
                        <h3 className="welcome-text">{homeData().welcome}</h3>
                        <div className="name-div">
                            <title className="name-text">{homeData().name}</title>
                        </div>   
                        <h2 className="position-text">{homeData().title} <a style={{color:"#3e64ff"}} href="https://legacy.reactjs.org/">{homeData().position}</a> </h2>
                    </div>
                </div>
           </div>
           <div className="flot-container">
                <div className="flot-child2">
                    <img className="my-photo" src={myImage}></img>
                </div>
           </div>
        </>
    )
}

