import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Continue() {
    let history = useHistory();

const redirect = () => {
    history.push('/game2')
}

    function nextLevel2() {
            redirect()
        }
    
    
    return <div className="continue" onClick={nextLevel2}></div>
}

export default Continue