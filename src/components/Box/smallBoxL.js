import React, { useState } from 'react'

function SmallBoxL() {
    const [text, setText] = useState('')

    function toggleText() {
        
    }
    
    return <div className="smallBoxL" onClick={toggleText}>{text}</div>
}

export default SmallBoxL