import React from 'react';
import style from './Project.module.css';
import {SkillPropsType} from '../Projects';


export const Project: React.FC<SkillPropsType> = ({icon, title, description}) => {
    return (
        <div className={style.skill}>
            <div
                style={{backgroundImage: `url(${icon})`}}
                className={style.icon}>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
};

