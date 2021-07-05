import React, { useState } from 'react'

function SmallBoxR() {
    const [text, setText] = useState('')

    function toggleText() {
        
    }
    
    return <div className="smallBoxR" onClick={toggleText}>{text}</div>
}

export default SmallBoxR