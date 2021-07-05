import React, { useState } from 'react'

function SmallBox() {
    const [text, setText] = useState('')

    function toggleText() {
        
    }
    
    return <div className="smallBox" onClick={toggleText}>{text}</div>
}

export default SmallBox