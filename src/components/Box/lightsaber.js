import React, { useState } from 'react'

function Lightsaber() {
    const [visible, setVisible] = useState(true)
    let cEquip = false;
    function toggleVisible() {
        setVisible(false)
    
    }
   // function crowbarEquip() {
   //     if (visible=false)
        

   return <div className={visible? "lightsaber" : "noCrowbar"} onClick={toggleVisible}></div>
    }
    
    

export default Lightsaber