import React, { useState } from "react";


export default function EMX() {
    const [filters, setFilters] = useState(['district', 'county'])
    return (
        <>
            <h1>
                EMX
            </h1>
            <button onClick = {() => setFilters([...filters, "filter"])}>add Filter</button>
            <Incidents filters = {filters}/>
            <Assets filters = {filters}/>
            <Inspection filters = {filters}/>
        </>

    )
}

function Incidents(props) {
    return (
        <>
            <h6>Incidents</h6>
            <ul>
                {props.filters.map(filter => <li> 
                    {filter}
                </li>)}
            </ul>
            <button>add incident filter</button>
        </>
    )
}

function Assets(props) {
    return (
        <>
            <h6>Assets</h6>
            <ul>
                {props.filters.map(filter => <li> 
                    {filter}
                </li>)}
            </ul>
        </>
    )
}


function Inspection(props) {
    return (
        <>
            <h6>Inspection</h6>
            <ul>
                {props.filters.map(filter => <li> 
                    {filter}
                </li>)}
            </ul>
        </>
    )
}