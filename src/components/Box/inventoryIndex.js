import React, { useState } from 'react'
import Crowbar from '../Box/crowbar';


function Tools() {

    function Crowbar() {
        const [visible, setVisible] = useState(true)
    
        function toggleVisible() {
            setVisible(true)
        }

        let inventory = 
        localStorage.setItem ('inventory'[inventory, 'Crowbar'])
        
        return <div className={visible? "Crowbar" : "noCrowbar"} onClick={toggleVisible}></div>
    }
};

export default Tools