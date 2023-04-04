import React from 'react';
import styles from './CustomButton.module.css';


type CustomButtonPropsType = {
    title: string
    language: string
    handleChange: (value: string) => void
    currentLocale?: string
}

const CustomButton: React.FC<CustomButtonPropsType> = ({title, language, handleChange, currentLocale}) => {

    const lastClassName = currentLocale === 'en-US' && title === 'EN' ?
        styles.colorCustomButton :
        currentLocale === 'ru-RU' && title === 'RU' ?
            styles.colorCustomButton :
            styles.unColorCustomButton
    return (
        <button
            onClick={() => handleChange(language)} value={currentLocale}
            className={lastClassName}>
            {title}
        </button>
    );
};

export default CustomButton;