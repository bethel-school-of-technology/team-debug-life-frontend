import React, { useState } from 'react'

function Crowbar() {
    const [text, setText] = useState('')

    function toggleText() {
        if(text === '') {
            setText('Clink')
        }
        else if(text === 'Clink') {
            setText('Clank')
        }
        else if(text === 'Clank') {
            setText('')
        }
    }
    
    return <div className="box" onClick={toggleText}>{text}</div>
}

export default Crowbar