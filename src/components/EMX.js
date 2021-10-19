import React, { useState } from "react";


export default function EMX() {
    const [filters, setFilters] = useState(['stark', 'tyrrell'])
    return (
        <>
            <h1>
                EMX
            </h1>
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