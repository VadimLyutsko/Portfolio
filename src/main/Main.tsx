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
                <div className={style.photo}>
                    <img src="https://avavatar.ru/images/full/26/pCIuqKJZv55Tz6Za.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

