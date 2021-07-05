import React from 'react';
import Tools from '../Box/inventoryIndex';
import "./inventory.css"; 
import Game from './inventory.js';
import '../Box/inventoryIndex.js';




export default function InventoryWindow() {

    return(
        <div className="Iwindow">

            <div className="row"> 
                <Tools id={0} />
                <Tools id={1} />
                <Tools id={2} />
                <Tools id={3} />
                <Tools id={4} />
                <Tools id={5} />
                <Tools id={6} />
                <Game/>
            </div>
        </div>
    );
};