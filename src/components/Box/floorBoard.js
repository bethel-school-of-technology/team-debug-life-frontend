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

function FloorBoard() {
    const {token, toss} = useToken();
    let history = useHistory();

    const redirect = async () => {
        await setRoom(token, 2)
        history.push('/game2')
    }

    function nextLevel2() {
        let inventory = localStorage.getItem('inventory');
        if (inventory && inventory.includes('Crowbar')) {
            redirect()
        }
    }


    return <div className="floorBoard" onClick={nextLevel2}></div>
}

export default FloorBoard