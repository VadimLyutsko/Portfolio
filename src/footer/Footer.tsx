import React from 'react';
import style from './Footer.module.css';


export const Footer = () => {


    return (
        <div className={style.contactsBlock}>

        <div className={style.contacts}>
            <h2> Vadim Lyutsko</h2>
            <div className={style.contactsForm} >
                <div className={style.miniLogo}>1</div>
                <div className={style.miniLogo}>2</div>
                <div className={style.miniLogo}>3</div>
                <div className={style.miniLogo}>4</div>
            </div>
            <p className={style.footerText}>All rights reserved </p>
        </div>
        </div>
    );
};

