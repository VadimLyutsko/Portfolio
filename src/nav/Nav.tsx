import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Что-то еще</a>
            <a href="">Проекты</a>
            <a href="">На English</a>
        </div>
    );
};

