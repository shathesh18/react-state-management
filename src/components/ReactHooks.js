import React, { useEffect, useState } from "react";

export default function ReactHooks() {
    const [houses, setHouses] = useState(["Slytherin", "Gryffindore"])

    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setTimeout(() => setTime(new Date()), 1000)
    }, [time])
    return (
        <>
            <h1>React Hooks</h1>
            <ol>
                {houses.map((house) => <li key = {house}>
                    {house}
                </li>)}
            </ol>
            <button
                onClick = {() => {
                    const x = [...houses]
                    x.push("new house")
                    setHouses(x)
                }}
            >
                Add new house
            </button>
            <h3>{time.toLocaleTimeString()}</h3>
        </>
    )
}