import React from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';
import GameWindow3 from './GameWindow3.js';
import InventoryInd from '../Box/InventoryIndex.js';
import '../Game/inventory.js';




import PlayerPanel from './PlayerPanel.js';

export default function GamePage({ userToken }) {

    // Reset inventory on start of room 3
    localStorage.setItem('inventory', ['Crowbar']);
    console.log(localStorage.getItem('inventory'));

    return (
        <div id='main'>
            <PlayerPanel userToken={userToken} />
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
