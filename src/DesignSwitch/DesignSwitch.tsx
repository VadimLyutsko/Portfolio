import React from 'react';
// @ts-ignore
import sound from './sound.mp3';
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
        alert('Ты что, дурак? Зачем ты тыкаешь')
        play()
    }

    return (
        <div style={musicStyle} className={style.switch}>

            <button className={style.switchButton} onClick={clickHandler}>Click!</button>
        </div>
    );
};

