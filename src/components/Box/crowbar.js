import React, { useState } from 'react'

function Crowbar() {
    const [visible, setVisible] = useState(true)
    //let cEquip = false;
    function toggleVisible() {
        setVisible(false)

    }
    function cEquip() {
        let hasCrowbar = true;
    }
    // function crowbarEquip() {
    //     if (visible=false)


    return <div className={visible ? "crowbar" : "noCrowbar"} onClick={cEquip, toggleVisible}></div>
}



export default Crowbar