import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlayerIcon from '../../images/Default.png';

async function requestUserData(token) {
    return fetch(`/api/getuser`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.text());
}

async function getUser(callback, token) {
    let user = await requestUserData(token);
    console.log(user)
    callback(user);
}

export default function PlayerPanel( { userToken } ) {
    let [username, setUsername] = useState("");

    useEffect(() => {
        getUser(setUsername, userToken);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
    return(
        <div id='player-panel'>
            <div id="player-icon">
                <img src={PlayerIcon} alt='player icon'></img>
            </div>
            <p id="player-username">{username}</p>
        </div>
    )
}

PlayerPanel.propTypes = {
    userToken: PropTypes.string.isRequired
}
