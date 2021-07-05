import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function JailDoor() {
    let history = useHistory();

const redirect = () => {
    history.push('/game5')
}

function nextLevel5() {
    let inventory = localStorage.getItem('inventory');
    if (inventory && inventory.includes('Lightsaber')) {
        redirect()
    }
}
    
    return <div className="jailDoor" onClick={nextLevel5}></div>
}

export default JailDoor