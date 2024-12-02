import React, { useState } from "react"


const Tabs = props => {
    const { items } = props
    
    const [content, setContent] = useState("")

    const handleClick = e => {
        setContent(items[e.target.value].content)
    }

    return(
        <div className="container">        
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2" style={{marginTop: "20px"}}>

                    {items.map( (item, index)=> 
                            <button onClick={ handleClick } value={ index } className="btn btn-primary btn-md" style={{marginRight: "10px"}} key={ index }>Tab {index + 1}</button>
                    )}    
                </div>
            </div>
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-12 col-md-8 offset-md-2" style={{border: "1px solid lightgrey", borderRadius: "5px", height: "100px"}}>
                        <p>{ content }</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs