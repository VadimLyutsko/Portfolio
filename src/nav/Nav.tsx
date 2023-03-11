import React from 'react';
import style from './Nav.module.css';
import logo from    './logo.svg'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navLi}><a href=""><img src={logo} alt=""/></a></li>
                <li className={style.navLi}><a href="">Гл</a></li>
                <li className={style.navLi}><a href="">Главная</a></li>
                <li className={style.navLi}><a href="">Главная</a></li>
                <li className={style.navLi}><a href="">Главная</a></li>
                <li className={style.navLi}><a href="">Главная</a></li>
            </ul>
        </nav>


    );
};

