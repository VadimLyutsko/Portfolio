import React from 'react';
import style from './Header.module.css';
import CustomButton from '../custom/CustomButton';

export const Header = () => {
    return (
        <div id={'me'} className={style.header}>

            <span className={style.personalData}>
                <span>{`+ 375 29 576-58-41`}</span>
                <span>Vadim_lyutsko@mail.ru</span>

            </span>

            <span className={style.buttonContainer}>
                <CustomButton isActive={true} title={'EN'}/>
                <CustomButton isActive={false} title={'RU'}/>
            </span>
        </div>
    );
};

