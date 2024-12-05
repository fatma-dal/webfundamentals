import React from 'react'
import { useParams } from 'react-router-dom'
function Message() {
    const {word,coll,bg}=useParams()

return (
    <div>
        <h1 style={{backgroundColor:bg, color:coll}}>The Word is :{word}</h1>
    </div>
)
}

export default Message