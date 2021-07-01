import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



function FloorBoard() {
    let history = useHistory();
    localStorage.setItem('inventory', ['']);
    console.log(localStorage.getItem('inventory'));
    const redirect = () => {
        history.push('/game2')
    }

    function nextLevel2() {
        let inventory = localStorage.getItem('Inventory');
        if (inventory.includes('Crowbar')) {
            redirect()
        }
        console.log(inventory)
    }


    return <div className="floorBoard" onClick={nextLevel2}>2</div>
}

export default FloorBoard