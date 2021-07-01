import React from 'react'

function Level ({currentLevel, levels }) {
    let activeLevel;

    for (const [key, value] of Object.entries(levels)) {
        if (key === currentLevel.toString()) {
            activeLevel = JSON.stringify(value);
        }
    }

    const {item} = JSON.parse(activeLevel);
    return(
        <>
         <h1>you found: {item.name}!</h1>
         <img src = {item.image} alt = {item.name} />
         <p>
             {item.name} position: {item.row}, {item.col}
         </p>
        </>
    );
}
export default Level;
