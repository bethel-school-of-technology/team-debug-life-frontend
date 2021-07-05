import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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
    
    return <div className="messExit" onClick={nextLevel3}></div>
}

export default MessExit