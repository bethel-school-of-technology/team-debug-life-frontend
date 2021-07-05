import React, { Component, useState } from 'react';
import "./inventory.css"; 
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import './inventoryWindow';
import '../Box/inventoryIndex';

export default function Game() {
    
    function onChange (newValue) {
        console.log("change", newValue);
    }
            return (
                <div className= "Game">
                    <div className= 'code-area'>
                    <AceEditor 
                    mode ="javascript"
                    theme = 'dracula'
                    onChange = {onChange}
                    width = 'auto'
                    height = '100'
                    name = 'UNIQUE_ID_OF_DIV'
                    editorProps = {{$blockScrolling: true}}
                />
                <div id = "console" className = "console"></div>
            </div>
            <div className = 'hidden'>
                <div className = 'shown'>
                    <inventoryIndex />
                </div>
            </div>
        </div>
        
    );
}

