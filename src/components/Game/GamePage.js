import React from 'react';
import PropTypes from 'prop-types';
import './GameStyle.css';
import Box from '../Box/index';
import Crowbar from '../Box/crowbar';


import PlayerPanel from './PlayerPanel.js';

export default function GamePage({ userToken }) {
    return (
        <div id='main'>
            <PlayerPanel userToken={userToken} />
            <h3>Dreaming Dutchman's Spooky Escape</h3>
            <div id='game-wrapper'>
            <div className="gwindow">

<div className="row">
    <Box id={0} />
    <Box id={1} />
    <Box id={2} />
    <Box id={3} />
    <Box id={4} />
    <Box id={5} />
    <Box id={6} />
</div>

<div className="row">
    <Box id={7} />
    <Box id={8} />
    <Box id={9} />
    <Box id={10} />
    <Box id={11} />
    <Box id={12} />
    <Box id={13} />
</div >

<div className="row">
    <Box id={14} />
    <Box id={15} />
    <Box id={16} />
    <Box id={17} />
    <Box id={18} />
    <Box id={19} />
    <Box id={20} />
</div >

<div className="row">
    <Box id={21} />
    <Box id={22} />
    <Box id={23} />
    <Box id={24} />
    <Box id={25} />
    <Box id={26} />
    <Box id={27} />
</div >

<div className="row">
    <Box id={28} />
    <Box id={29} />
    <Box id={30} />
    <Box id={31} />
    <Box id={32} />
    <Box id={33} />
    <Box id={34} />
</div >

<div className="row">
    <Box id={35} />
    <Box id={36} />
    <Box id={37} />
    <Box id={38} />
    <Box id={39} />
    <Box id={40} />
    <Box id={41}/>
</div >

<div className="row">
    <Box id={42} />
    <Box id={43} />
    <Box id={44} />
    <Box id={45} />
    <Box id={46} />
    <Box id={47} />
    <Box id={48} />
</div >

<div className="row">
    <Box id={49} />
    <Box id={50} />
    <Box id={51} />
    <Box id={52} />
    <Crowbar id={53} />
    <Crowbar id={54} />
    <Box id={55} />
</div >

<div className="row">
    <Box id={56} />
    <Box id={57} />
    <Box id={58} />
    <Box id={59} />
    <Crowbar id={60} />
    <Crowbar id={61} />
    <Box id={62} />
</div >

<div className="row">
    <Box id={63} />
    <Box id={64} />
    <Box id={65} />
    <Box id={66} />
    <Box id={67} />
    <Box id={68} />
    <Box id={69} />
</div >

<div className="row">
    <Box id={70} />
    <Box id={71} />
    <Box id={72} />
    <Box id={73} />
    <Box id={74} />
    <Box id={75} />
    <Box id={76} />

</div >


</div>
                <div id='btn-bar'>
                    <button>Save</button>
                    <button>Save & Quit</button>
                </div>
            </div>
        </div>
    )
}

GamePage.propTypes = {
    userToken: PropTypes.string.isRequired
}
