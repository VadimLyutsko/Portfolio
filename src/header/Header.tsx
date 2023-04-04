import React from 'react';
import style from './Header.module.css';
import CustomButton from '../custom/CustomButton';
import {LOCALES} from '../i18n/locales';

type HeaderPropsType = {
    locale?: string
    handleChange: (value: string) => void
    currentLocale?: string
}

export const Header: React.FC<HeaderPropsType> = (
    {
        currentLocale,
        handleChange,
        locale
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
            {/*<div className="switcher">*/}
            {/*    /!* Выпадающий список для выбора языка *!/*/}
            {/*    Languages <select onChange={handleChange} value={currentLocale}>*/}
            {/*    {languages.map(({name, code}) => (*/}
            {/*        <option key={code} value={code}>*/}
            {/*            {name}*/}
            {/*        </option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            {/*</div>*/}

            <div id={'me'} className={style.header}>

            <span className={style.personalData}>
                <span>{`+ 375 29 576-58-41`}</span>
                <span>Vadim_lyutsko@mail.ru</span>

            </span>


                <span className={style.buttonContainer}>

                <CustomButton
                    handleChange={handleChange}
                    currentLocale={currentLocale}
                    title={'EN'}
                    language={'en-US'}
                />

                <CustomButton
                    handleChange={handleChange}
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

