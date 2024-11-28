// import React from 'react'
import { useState } from "react"

function PersonCard(props) {
    const { firstName, lastName, age, hairColor } = props
    const [newage,setage] = useState(age)
    const submitevent=()=>{
        setage(newage + 1)
    }
    return (
        <div>
            <h1>{firstName},{lastName}</h1>
            <h3>Age: {newage}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={()=>submitevent()}>Birthday Button for {firstName}{lastName}</button>
        </div>
    )
}

export default PersonCard