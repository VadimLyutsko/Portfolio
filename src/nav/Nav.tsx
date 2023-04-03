import React from 'react';
import style from './Nav.module.css';
import logo from    './logo.svg'
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navLiLogo}><a href="#me"><img src={logo} alt=""/></a></li>
                <li className={style.navLi}><a href="#skills">Skills</a></li>
                <li className={style.navLi}><a href="#projects">Projects</a></li>
                <li className={style.navLi}><a href="#contacts">Contacts</a></li>
                <li className={style.navLi}><a href="#footer">Footer</a></li>
            </ul>
        </nav>


    );
};

