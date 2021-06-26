import React, { useState } from 'react'

function Key() {
    const [visible, setVisible] = useState(true)

    function toggleVisible() {
        setVisible(false)

    }
    
    return <div className={visible? "key" : "noCrowbar"} onClick={toggleVisible}></div>
   

}

export default Key