import React, { useState, useEffect } from 'react'
import Crowbar from './crowbar';
import Lightsaber from './lightsaber';
import Key from './key';
import CrowbarImg from '../../images/crowbar.png';
import LightsaberImg from '../../images/Lightsaber.png';
import KeyImg from '../../images/jailKey.png';

function InventoryInd() {
        const [CrowbarVisible, makeCrowbarVisible] = useState(false)
        const [LightsaberVisible, makeLightsaberVisible] = useState(false)
        const [KeyVisible, makeKeyVisible] = useState(false)

        useEffect(() => {
                let inventory = localStorage.getItem('inventory')

                if(inventory && inventory.includes('Crowbar')){
                        makeCrowbarVisible(true)
                }

                if(inventory && inventory.includes('Lightsaber')){
                        makeLightsaberVisible(true)
                }

                if(inventory && inventory.includes('Key')){
                        makeKeyVisible(true)
                } 
        }, [])

        return (
                <div className="game">
                        <img src = {CrowbarImg} alt= 'Crowbar' className={CrowbarVisible ? "shown" : "hidden"} />
                        <img src = {LightsaberImg} alt='Lightsaber' className={LightsaberVisible ? "shown" : "hidden"} />
                        <img src = {KeyImg} alt='Key' className={KeyVisible ? "shown" : "hidden"} />
                </div>
        )
};


export default InventoryInd; 