import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Plank() {
    let history = useHistory();

const redirect = () => {
    history.push('/gameEnd')
}

    function nextLevel6() {

        let hasCrowbar = true;
        if(hasCrowbar === true) {
            redirect()

        }
    }
    
    return <div className="plank" onClick={nextLevel6}></div>
}

export default Plank