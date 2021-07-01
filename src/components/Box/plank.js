import React, { useState } from 'react'

function Plank() {
    const [text, setText] = useState('')

    function toggleText() {
        if(text === '') {
            setText('Yeet')
        }
        else if(text === 'Yeet') {
            setText('Yote')
        }
        else if(text === 'Yote') {
            setText('')
        }
    }
    
    return <div className="plank" onClick={toggleText}>{text}</div>
}

export default Plank