import React, {useState} from 'react';
// @ts-ignore
import sound from './sound.mp3';
import style from './MusicButton.module.css';

export const MusicButton = () => {

    const [disabled, setDisabled ] = useState(false)

    function play() {
        new Audio(sound).play();
        setDisabled(true)
    }

    let musicStyle = {
        justifyContent: 'center',
        marginTop: '50px',
        display: 'flex'
    };

    const clickHandler = () => {
        alert('Ну и чего ты в меня тычешь???')
        play()
    }

    return (
        <div style={musicStyle} className={style.switch}>

            <button disabled={disabled} className={style.switchButton} onClick={clickHandler}></button>
        </div>
    );
};

