import React from 'react';
import style from './Header.module.css';
import CustomButton from '../custom/CustomButton';
import {LOCALES} from '../i18n/locales';

type HeaderPropsType = {
    setLanguageToLS: (value: string) => void
    currentLocale?: string
}

export const Header: React.FC<HeaderPropsType> = (
    {
        currentLocale,
        setLanguageToLS,
    }) => {

    const languages = [
        {name: 'English', code: LOCALES.ENGLISH},
        {name: 'Русский', code: LOCALES.RUSSIAN},
        // {name: '日本語', code: LOCALES.JAPANESE},
        // {name: 'Français', code: LOCALES.FRENCH},
        // {name: 'Deutsche', code: LOCALES.GERMAN}
    ]

    return (

        <>
            <div id={'me'} className={style.header}>

            <span className={style.personalData}>
                <span>
                    <a href="tel:+375295765841">    {`+ 375 29 576-58-41`}</a>
                </span>
                <span>
                    <a href="mailto:       vadim_lyutsko@mail.ru">      vadim_lyutsko@mail.ru</a>
                </span>
            </span>


                <span className={style.buttonContainer}>

                <CustomButton
                    setLanguageToLS={setLanguageToLS}
                    currentLocale={currentLocale}
                    title={'EN'}
                    language={'en-US'}
                />

                <CustomButton
                    setLanguageToLS={setLanguageToLS}
                    currentLocale={currentLocale}
                    title={'RU'}
                    language={'ru-RU'}
                />
            </span>


            </div>
        </>


        // <div id={'me'} className={style.header}>
        //
        //     <span className={style.personalData}>
        //         <span>{`+ 375 29 576-58-41`}</span>
        //         <span>Vadim_lyutsko@mail.ru</span>
        //
        //     </span>
        //
        //     <span className={style.buttonContainer}>
        //         <CustomButton isActive={true} title={'EN'}/>
        //         <CustomButton isActive={false} title={'RU'}/>
        //     </span>
        // </div>
    );
};

