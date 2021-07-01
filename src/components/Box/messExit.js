import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import hasCrowbar from './crowbar';

function MessExit() {
    let history = useHistory();

const redirect = () => {
    history.push('/game3')
}

    function nextLevel3() {

        let hasCrowbar = true;
        if(hasCrowbar === true) {
            redirect()

        }
    }
    
    return <div className="messExit" onClick={nextLevel3}>3</div>
}

export default MessExit