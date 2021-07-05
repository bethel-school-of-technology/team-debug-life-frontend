import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './GameStyle.css';
import GameWindow3 from './GameWindow3.js';
import InventoryInd from '../Box/InventoryIndex.js';
import '../Game/inventory.js';
import UIfx from 'uifx';
import PlayerPanel from './PlayerPanel.js';

import mp3 from '../../sounds/doorSound.mp3';

const soundEffect = new UIfx(mp3);
soundEffect.setVolume(0.5);


async function getRoom(token) {
    return fetch('http://localhost:8080/api/getroom', {
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(data => data.json())
}

function GamePage(props) {

    // Reset inventory on start of room 3
    localStorage.setItem('inventory', ['Crowbar']);
    console.log(localStorage.getItem('inventory'));

    useEffect(() => {
        async function checkPage() {
            soundEffect.play();
            // Set username
            // Check username and if null, reroute to login page
            let page = await getRoom(props.userToken);
            
            if (!page.room || page.room == 1) {
                props.history.push('/game');
            } else if (page.room == 2) {
                props.history.push('/game2');
            } else if (page.room == 3) {
                console.log(page.room);
            } else if (page.room == 4) {
                props.history.push('/game4');
            } else if (page.room == 5) {
                props.history.push('/game5');
            }
        }
        checkPage();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id='main'>
            <PlayerPanel userToken={props.userToken} />
            <h1>Dreaming Dutchman's Spooky Escape</h1>
            <div id='game-wrapper'>
                <GameWindow3 />
            </div>

            <div id='info'>
                <div id='about-game'>
                    <h2 id='ag-header'>About Game</h2><hr></hr>
                    <p>
                        Ahoy! Thank you for visiting our game page.
                        Captain "Salty Dog" Van Scrits has been trapped in a nightmare of The Flying Dutchman.
                        Help him escape from the perilous dream. First, flee the captains quarters.
                        Time is ticking, get out of the mess hall with haste.
                        Slip through the bunkroom. With two more rooms, it is up to you.
                        Can Captain "Salty Dog" Van Scrits be redeemed from this spooky dream?
                    </p>
                </div>

                <div id='game-instructions'>
                    <h2 id='gi-header'>Game Instructions</h2><hr></hr>
                    <ul>
                        <li>
                            Help the captain out of each room.
                        </li>
                        <li>
                            Look for clues in every place.
                        </li>
                        <li>
                            Use your mouse arrow to click on the clues.
                        </li>
                        <li>
                            Break loose after solving each puzzle.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

GamePage.propTypes = {
    userToken: PropTypes.string.isRequired
}

export default withRouter(GamePage);