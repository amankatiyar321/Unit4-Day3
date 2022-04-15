import { useState } from "react";
import './count.css';
export const Zeta =()=>{
    const [counter,setCounter]=useState(0);
    const addNub=()=>{
        setCounter(counter+1)
    }
    const subNub=()=>{
        setCounter(counter-1)
    }
    const DobNub=()=>{
        setCounter(counter*2)
    }
    const clearNub=()=>{
        setCounter(counter*0)
    }
    return (
        <div className="main">
            <h1 className={`${counter%2===0 ? "even" : "odd"}`}>{counter}</h1>
            <button onClick={addNub}>+</button>
             <button onClick={DobNub}>Double</button>
             <button onClick={subNub}>-</button>
             <button onClick={clearNub}>Clear</button>
        </div>
    )
}