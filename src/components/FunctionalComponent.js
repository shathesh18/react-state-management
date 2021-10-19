import React from "react";
import ReactDOM from "react-dom";

// const element = <h1> Hello World </h1>
// ReactDOM.render(element, document.getElementById('root'));

export default function FunctionalComponent(props) {
    let count = 0
    return (<div>
        <h1>Functional Component</h1>
        <div>
            <button 
                onClick = {() => {
                    count += 1
                    console.log(count)
                }}
            > 
                Increment 
            </button>
            <button 
                onClick = {() => {
                    count -= 1
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