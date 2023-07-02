import React from 'react';
// @ts-ignore
import sound from './soundd.mp3';
import style from './DesignSwitch.module.css';

export const DesignSwitch = () => {

    function play() {
        new Audio(sound).play();
    }

    let musicStyle = {
        justifyContent: 'center',
        marginTop: '50px',
        display: 'flex'
    };

    const clickHandler = () => {
        alert('Может ещё куда-нибудь ткнешь??')
        play()
    }

    return (
        <div style={musicStyle} className={style.switch}>

            <span className={style.switchButton} onClick={clickHandler}></span>
        </div>
    );
};

