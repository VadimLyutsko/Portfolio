import React from 'react';
import styles from './CustomButton.module.css';


type CustomButtonPropsType ={
title:string
}

const CustomButton:React.FC<CustomButtonPropsType> = ({title}) => {
    return (
        <button
            className={styles.customButton} >
            {title}
        </button>
    );
};

export default CustomButton;