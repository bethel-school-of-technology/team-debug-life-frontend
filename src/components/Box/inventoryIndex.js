import React, { useState, useEffect } from 'react'
import Crowbar from './crowbar';
import Lightsaber from './lightsaber';
import Key from './key';
import CrowbarImg from '../../images/crowbar.png';

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
                <div>
                        <img src = {CrowbarImg} alt= 'Crowbar' className={CrowbarVisible ? "hidden" : "shown"} />
                        <img src = {'Lightsaber.png'} alt='Lightsaber' className={LightsaberVisible ? "hidden" : "shown"} />
                        <img src = {'Key.png'} alt='Key' className={KeyVisible ? "hidden" : "shown"} />
                </div>
        )
};


export default InventoryInd; 