import React, { Component, useState } from 'react';
import "./inventory.css"; 
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_blue'

function App() {
    function onChange (newValue) {
        console.log("change", newValue);
    }
            return (
                <div className= "App">
                    <div className= 'code-area'>
                    <AceEditor 
                    mode ="javascript"
                    theme = 'tomorrow_night_blue'
                    onChange = {onChange}
                    name = 'UNIQUE_ID_OF_DIV'
                    editorProps = {{$blockScrolling: true}}
                />
                <div id = "console" className = "console"></div>
            </div>
            <div className = 'content'>
                Game content goes here
                <div className = 'inventory'></div>
            </div>
        </div>
    );
}
