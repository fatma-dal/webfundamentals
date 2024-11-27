// import React from 'react'
import Advertisement from "./Advertisement"
import Subcontent from "./Subcontent"
import '../App.css'

function MainContent() {
return (
    <div className="red">
        <div className="parent">
        <Subcontent/>
        <Subcontent/>
        <Subcontent/>
        </div>
        <Advertisement/>

    </div>
)
}

export default MainContent