import React, { useState } from 'react'
import Crowbar from '../Box/crowbar';


function Tools() {

    function Crowbar() {
        const [visible, setVisible] = useState(false)
    
        function toggleVisible() {
            setVisible(true)
        }

        





     
        
        return <div className={visible? "noCrowbar ": "Crowbar"} onClick={toggleVisible}></div>
    }
};

export default Tools