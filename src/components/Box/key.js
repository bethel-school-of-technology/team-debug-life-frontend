import React, { useState } from 'react'

function Key() {
    const [visible, setVisible] = useState(true)
    //let cEquip = false;
    function toggleVisible() {
        setVisible(false)

    }

    function setItem() {
        let inventory = localStorage.getItem('inventory');
        localStorage.setItem('inventory', [...inventory, 'Key']);
    }
    // function crowbarEquip() {
    //     if (visible=false)


    return <div className={visible ? "key" : "noCrowbar"} onClick={function () { setItem(); toggleVisible() }}></div>

}

export default Key