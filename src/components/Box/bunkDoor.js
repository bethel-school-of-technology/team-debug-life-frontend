import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import hasCrowbar from './crowbar';

function BunkDoor() {
    let history = useHistory();

const redirect = () => {
    history.push('/game4')
}

    function nextLevel4() {
        //testing
        let hasCrowbar = true;
        if(hasCrowbar === true) {
            redirect()
            //switch to hasKey
        }
    }
    
    return <div className="bunkDoor" onClick={nextLevel4}>4</div>
}

export default BunkDoor