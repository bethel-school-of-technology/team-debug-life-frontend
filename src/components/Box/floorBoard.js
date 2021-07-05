import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



function FloorBoard() {
    let history = useHistory();

    const redirect = () => {
        history.push('/game2')
    }

    function nextLevel2() {
        let inventory = localStorage.getItem('inventory');
        if (inventory && inventory.includes('Crowbar')) {
            redirect()
        }
    }


    return <div className="floorBoard" onClick={nextLevel2}></div>
}

export default FloorBoard