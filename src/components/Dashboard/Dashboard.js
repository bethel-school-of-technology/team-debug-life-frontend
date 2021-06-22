import React from 'react';
// import PropTypes from 'prop-types';
import './Dashboard.css';


export default function Dashboard() {
    return(
        <div class='container' className='dashboard-wrapper'>
           
            <h1 className='title'>Dreaming Dutchman's Spooky Escape</h1>
            <b></b>
            <div class='item'>
                <div className='about-game'>
                    <h2 className='ag-header'>About Game</h2>
                    <p>Yo-ho! Yo-ho! Thank you for visiting our game page. Captain "Salty Dog" Van Scrits has been captured</p>
                    <p>by the crew of The Serpent of the Seas. Help him escape to his band of mates on the Flying Dutchman.</p>
                    <p>Flee the captains quarters. Time is ticking, get out of the mess hall with haste. Slip through the bunkroom.</p>
                    <p>If you're not quiet you might wake the crew. With two more rooms, it is up to you. Can Captain "Salty Dog"</p>
                    <p>Van Scrits be redeemed from this spooky dream?</p>
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
    );
}