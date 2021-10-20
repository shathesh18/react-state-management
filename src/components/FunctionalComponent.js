import React, { useState } from "react";
import ReactDOM from "react-dom";

// const name = "sathish"
// const element = <h1 className = {{color: "blue"}}> Hello World </h1>
// const element2 = <h1> Hello {name}</h1>
// ReactDOM.render(element, document.getElementById('root'));

export default function FunctionalComponent(props) {

    const [count, setCount] = useState(0)
    //let count = 0
    return (<div>
        <h1>Functional Component</h1>
        <div>
            <button 
                onClick = {() => {
                    setCount(count + 1)
                    console.log(count)
                }}
            > 
                Increment 
            </button>
            <button 
                onClick = {() => {
                    setCount(count - 1)
                    console.log(count)
                }}
            >
                Decrement 
            </button>
        </div>
        <div>
            The current count is {count}
        </div>
    </div>)
}