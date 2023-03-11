import React from 'react';
import styles from './CustomButton.module.css';


type CustomButtonPropsType = {
    title: string
    isActive: boolean
}

const CustomButton: React.FC<CustomButtonPropsType> = ({title, isActive}) => {
    let lastClassName = isActive ? styles.colorCustomButton : styles.unColorCustomButton
    return (
        <button
            className={lastClassName}>
            {title}
        </button>
    );
};

export default CustomButton;