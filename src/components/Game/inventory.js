import React, { Component, useState } from 'react';
import "./inventory.css"; 
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import './inventoryWindow';
import InventoryInd from '../Box/InventoryIndex';

export default function Game() {
    
    function onChange (newValue) {
        console.log("change", newValue);
    }
    return (
    <div className="inventory-container">
        <InventoryInd />
    </div>
        
    );
}

