import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function BunkDoor() {
    let history = useHistory();

const redirect = () => {
    history.push('/game4')
}

    function nextLevel4() {
        let inventory = localStorage.getItem('inventory');
        if (inventory && inventory.includes('Key')) {
            redirect()
        }
    }
    
    return <div className="bunkDoor" onClick={nextLevel4}></div>
}

export default BunkDoor