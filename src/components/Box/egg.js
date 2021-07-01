import React, { useState } from 'react'

function Egg() {
    const [text, setText] = useState('')

    function toggleText() {
        if(text === '') {
            setText('X')
        }
        else if(text === 'X') {
            setText('O')
        }
        else if(text === 'O') {
            setText('')
        }
    }
    
    return <div className="egg" onClick={toggleText}>{text}</div>
}

export default Egg