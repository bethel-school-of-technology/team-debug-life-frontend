import React, {useState} from "react";
import gameLevels from ".levels";

function App(){
    const [levels, setLevels] = useState (gameLevels);
    const [currentLevel, setCurrentLevel] = useState(1);
}

const levels = {
    1: {
        item: {
            name: "Crowbar",
            width: 1,
            height: 1,
            row: 0,
            col: 0,
            image: "crowbar.png",
        },
        done: false,
    },
    2: {
        item: {
            name: "jailKey",
            width: 1,
            height: 1,
            row: 0,
            col: 0,
            image: "jailKey.png",
        },
        done: false,

    },
};

export default levels;