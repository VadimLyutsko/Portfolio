import React from 'react';
import style from './Header.module.css';
import {Nav} from '../nav/Nav';
import CustomButton from '../custom/CustomButton';

export const Header = () => {
    return (
        <div className={style.header}>
            {/*<Nav/>*/}

            <span className={style.personalData}>
                <span>+375295765841</span>
                <span>Vadim_lyutsko@mail.ru</span>

            </span>

            <span className={style.buttonContainer}>
                <CustomButton title={'EN'}/>
                <CustomButton title={'RU'}/>
            </span>
        </div>
    );
};

