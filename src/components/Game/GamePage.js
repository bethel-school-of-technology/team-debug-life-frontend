import React from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';

import PlayerPanel from './PlayerPanel.js';

export default function GamePage( { userToken } ) {
    return(
        <div id='main'>
            <PlayerPanel userToken={userToken}/>
            <h3>Dreaming Dutchman's Spooky Escape</h3>
            <div id='game-wrapper'>
                <div id='game-window'></div>
                <div id='btn-bar'>
                    <button>Save</button>
                    <button>Save & Quit</button>
                </div>
            </div>
        </div>
    )
}

GamePage.propTypes = {
    userToken: PropTypes.string.isRequired
}
