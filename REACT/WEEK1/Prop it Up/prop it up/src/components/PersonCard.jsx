// import React from 'react'
// import App from "../App"

const PersonCard=(props)=> {
    const {firstName ,lastName, age,hairColor}=props
return (
    <div>
        <h1>{firstName},{lastName}</h1>
        <h4>Age : {age}</h4>
        <h4>Hair Color : {hairColor}</h4>

    </div>
)
}

export default PersonCard