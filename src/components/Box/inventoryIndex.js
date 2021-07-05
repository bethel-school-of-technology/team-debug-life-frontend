import React, { useState } from 'react'
import Crowbar from './crowbar';
import Lightsaber from './lightsaber';
import Key from './key';

function InventoryInd() {
    const [CrowbarVisible, makeCrowbarVisible] = useState(false)
    const [LightsaberVisible, makeLightsaberVisible] = useState(false)
    const [KeyVisible, makeKeyVisible] = useState(false)

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

    return (
        <div>
           <img src = {'Crowbar.png'} alt= 'Crowbar' {...CrowbarVisible ? "hidden" : "shown"} />
           <img src = {'Lightsaber.png'} alt='Lightsaber' {...LightsaberVisible ? "hidden" : "shown"} />
           <img src = {'Key.png'} alt='Key' {...KeyVisible ? "hidden" : "shown"} />
        </div>
    )
};


export default InventoryInd; 