import React, { useState } from 'react'

function Box() {
    const [text, setText] = useState('')

    function toggleText() {
        
    }
    
    return <div className="box" onClick={toggleText}>{text}</div>
}

export default Box