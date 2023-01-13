import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Some text in Main</span>
                    <h1>Text H1</h1>
                    <p>some link</p>
                </div>
                {/*<div className={style.photo}>*/}
                {/*    <img src="https://i.pinimg.com/736x/a7/94/50/a79450796ef296bf93ef60971239a72f--beautiful-places.jpg" alt=""/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

