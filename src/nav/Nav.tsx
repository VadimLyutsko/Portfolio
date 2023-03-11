import React from 'react';
import style from './Nav.module.css';
import logo from    './logo.svg'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navLiLogo}><a href=""><img src={logo} alt=""/></a></li>
                <li className={style.navLi}><a href="">Image 1</a></li>
                <li className={style.navLi}><a href="">Image 2</a></li>
                <li className={style.navLi}><a href="">Image 3</a></li>
                <li className={style.navLi}><a href="">Image 4</a></li>
                <li className={style.navLi}><a href="">Image 5</a></li>
            </ul>
        </nav>


    );
};

