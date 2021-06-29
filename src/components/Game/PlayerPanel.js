import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
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
    .then(response => {
        if (response.status === 200) {
            return response.text();
        } else {
            return null;
        }
    });
}

async function getUser(callback, token) {
    let user = await requestUserData(token);
    callback(user);
    return user;
}

function PlayerPanel( props ) {
    let [username, setUsername] = useState("");

    useEffect(() => {
        async function setup() {
            // Set username
            // Check username and if null, reroute to login page
            let user = await getUser(setUsername, props.userToken);
            if (user === null) {
                props.history.push('/login');
            }
        }
        setup();
    }, [])

    

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

export default withRouter(PlayerPanel);