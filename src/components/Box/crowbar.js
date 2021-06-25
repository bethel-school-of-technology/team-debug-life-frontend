import React, { useState } from 'react'

function Crowbar() {
    const [visible, setVisible] = useState(true)

    function toggleVisible() {
        setVisible(false)
    //     if(text === '') {
    //         setText('Clink')
    //     }
    //     else if(text === 'Clink') {
    //         setText('Clank')
    //     }
    //     else if(text === 'Clank') {
    //         setText('')
    //     }
    }
    
    return <div className={visible? "crowbar" : "noCrowbar"} onClick={toggleVisible}></div>
   

}

export default Crowbar