import React, { useState } from 'react'

function Lightsaber() {
    const [visible, setVisible] = useState(true)
    let cEquip = false;
    function toggleVisible() {
        setVisible(false)
    
    }
    function setItem() {
        let inventory = localStorage.getItem('inventory');
        localStorage.setItem('inventory', [...inventory, 'Lightsaber']);
    }


    return <div className={visible ? "lightsaber" : "noCrowbar"} onClick={function() {setItem(); toggleVisible()}}></div>
    }
    
    

export default Lightsaber