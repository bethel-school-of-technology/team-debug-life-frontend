import React, { useState } from 'react'

function Egg() {
    const [text, setText] = useState('')

    function toggleText() {
        
    }
    
    return <div className="egg" onClick={toggleText}>{text}</div>
}

export default Egg