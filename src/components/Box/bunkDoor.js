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

function BunkDoor() {
    const {token, toss} = useToken();
    let history = useHistory();

    const redirect = async () => {
        await setRoom(token, 4)
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