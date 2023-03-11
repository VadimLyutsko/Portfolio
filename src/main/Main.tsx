import React from 'react';
import style from './Main.module.css';

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h6>👋 Hello, My name is</h6>
                <h1 className={style.myName}>Vadim Lyutsko</h1>
                <p>-- The running line --</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consectetur consequatur
                </p>
                <p>Download CV</p>
            </div>
            <div className={style.bannerContainer}></div>
            {/*<div className={style.photo}>*/}
            {/*    <img src="https://i.pinimg.com/736x/a7/94/50/a79450796ef296bf93ef60971239a72f--beautiful-places.jpg" alt=""/>*/}
            {/*</div>*/}
        </div>
    );
};

