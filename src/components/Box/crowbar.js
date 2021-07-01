import React, { useState } from 'react'

function Crowbar() {
    const [visible, setVisible] = useState(true)
    //let cEquip = false;
    function toggleVisible() {
        setVisible(false)

    }
    function setItem() {
        localStorage.setItem('Inventory', ['Crowbar'])
        console.log("Why You Do Dis? Why Are you like this?")
    }
    // function crowbarEquip() {
    //     if (visible=false)


    return <div className={visible ? "crowbar" : "noCrowbar"} onClick={setItem, toggleVisible}></div>
}



export default Crowbar