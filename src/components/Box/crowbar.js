import React, { useState } from 'react'

function Crowbar() {
    const [visible, setVisible] = useState(true)
    //let cEquip = false;
    function toggleVisible() {
        setVisible(false)

    }
    function setItem() {
        let inventory = localStorage.getItem('inventory');
        localStorage.setItem('inventory', [...inventory, 'Crowbar']);
    }
    // function crowbarEquip() {
    //     if (visible=false)


    return <div className={visible ? "crowbar" : "noCrowbar"} onClick={function() {setItem(); toggleVisible()}}></div>
}



export default Crowbar