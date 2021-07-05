import React, { useState } from 'react'

import UIfx from 'uifx';
import mp3 from '../../sounds/lightsaberSound.mp3';

const soundEffect = new UIfx(mp3);
soundEffect.setVolume(0.5);

function Lightsaber() {
    const [visible, setVisible] = useState(true)
    let cEquip = false;
    function toggleVisible() {
        setVisible(false)
    
    }
    function setItem() {
        soundEffect.play();
        let inventory = localStorage.getItem('inventory');
        localStorage.setItem('inventory', [...inventory, 'Lightsaber']);
    }


    return <div className={visible ? "lightsaber" : "noCrowbar"} onClick={function() {setItem(); toggleVisible()}}></div>
    }
    
    

export default Lightsaber