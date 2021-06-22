import React from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';

import PlayerPanel from './PlayerPanel.js';

export default function GamePage( { userToken } ) {
    return(
        <div id='main'>
            <PlayerPanel userToken={userToken}/>
            <h1 className='title'>Dreaming Dutchman's Spooky Escape</h1>
            <div id='game-wrapper'>
                <div id='game-window'></div>
                <div id='btn-bar'>
                    <button>Save</button>
                    <button>Save & Quit</button>
                </div>
            </div>

            <div className='item'>
                <div className='about-game'>
                    <h2 className='ag-header'>About Game</h2>
                    <p>Ahoy! Thank you for visiting our game page. Captain "Salty Dog" Van Scrits has been captured by the crew of The Flying Dutchman. Help him escape from the perilous ship. First, flee the captains quarters. Time is ticking, get out of the mess hall with haste. Slip through the bunkroom. If you're not quiet you might wake the crew. With two more rooms, it is up to you. Can Captain "Salty Dog" Van Scrits be redeemed from this spooky dream?</p>
                </div>

                <div className='game-instructions'>
                    <h2 className='gi-header'>Game Instructions</h2>
                    <ul>
                        <li>
                            Help the captain out of each room:
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
