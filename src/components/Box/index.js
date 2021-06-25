import React, { useState } from 'react'

function Box() {
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
    
    return <div className="box" onClick={toggleText}>{text}</div>
}

export default Box