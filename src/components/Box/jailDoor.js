import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import hasCrowbar from './crowbar';

function JailDoor() {
    let history = useHistory();

const redirect = () => {
    history.push('/game5')
}

    function nextLevel5() {
        //testing
        let hasCrowbar = true;
        if(hasCrowbar === true) {
            redirect()
            //add routing to Level 5
        }
    }
    
    return <div className="jailDoor" onClick={nextLevel5}>5</div>
}

export default JailDoor