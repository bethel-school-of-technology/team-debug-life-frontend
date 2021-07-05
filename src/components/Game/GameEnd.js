import React from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';
import GameWindow6 from './GameWindow6.js';
//added code
import { BrowserRouter as Router, useHistory } from 'react-router-dom';



import PlayerPanel from './PlayerPanel.js';

import UIfx from 'uifx';
import sky from '../../sounds/youreFinallyAwake.mp3';

const soundEffect = new UIfx(sky);
soundEffect.setVolume(0.5);

export default function GamePage(props) {

    // Reset inventory on start of room 2
    localStorage.setItem('inventory', ['Crowbar', 'Key', 'Lightsaber']);
    console.log(localStorage.getItem('inventory'));


    soundEffect.play();
    console.log("FUS RO DA!")



    return (
        <div id='main'>
            <PlayerPanel userToken={props.userToken} />
            <h1>Dreaming Dutchman's Spooky Escape</h1>
            <div id='game-wrapper'>
                <GameWindow6 />
            </div>

            <div id='btn-bar'>
                <button className='ui-btn'>Save</button>
                <button className='ui-btn'>Save & Quit</button>
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
