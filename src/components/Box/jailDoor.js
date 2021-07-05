import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import useToken from '../../useToken.js';

async function setRoom(token, room) {
    return fetch('http://localhost:8080/api/setroom', {
        method: 'POST',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        },
        body: room
    })
    .then(data => data.status)
}

function JailDoor() {
    const {token, toss} = useToken();
    let history = useHistory();

    const redirect = async () => {
        await setRoom(token, 5)
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