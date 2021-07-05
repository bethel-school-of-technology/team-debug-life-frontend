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

function MessExit() {
    const {token, toss} = useToken();
    let history = useHistory();

    const redirect = async () => {
        await setRoom(token, 3)
        history.push('/game3')
    }

    function nextLevel3() {

        let hasCrowbar = true;
        if(hasCrowbar === true) {
            redirect()

        }
    }
    
    return <div className="messExit" onClick={nextLevel3}></div>
}

export default MessExit