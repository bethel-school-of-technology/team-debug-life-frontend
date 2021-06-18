import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';


async function requestUserData(token) {
    return fetch(`/api/getuser`, {
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.text()); // return true when token is valid (returns status 200)
}

async function getUser(token) {
    let user = await requestUserData(token);
    console.log(user);
    return user;
}

export default function GamePage( { userToken } ) {
    getUser(userToken);

    return(
        <div id='main'>
            <h1>Play</h1>
        </div>
    )
}

GamePage.propTypes = {
    userToken: PropTypes.string.isRequired
}
