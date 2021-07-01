import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import hasCrowbar from './crowbar';
import cEquip from '../Box/crowbar';

function FloorBoard() {
    let history = useHistory();

const redirect = () => {
    history.push('/game2')
}

    function nextLevel2() {
        //testing
        let hasCrowbar = false;
        if(hasCrowbar === true) {
            redirect()
            //switch to hasLightsaber
        }
    }
    
    return <div className="floorBoard" onClick={nextLevel2}>2</div>
}

export default FloorBoard