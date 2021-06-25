import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    callback(user);
}

export default function PlayerPanel( { userToken } ) {
    let [username, setUsername] = useState("");
    getUser(setUsername, userToken);

    return(
        <div id='player-panel'>
            <h5>Username: {username}</h5>
        </div>
    )
}

PlayerPanel.propTypes = {
    userToken: PropTypes.string.isRequired
}
