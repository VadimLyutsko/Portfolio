import React from 'react';
import style from './Project.module.css';
import {ProjectPropsType} from '../Projects';


export const Project: React.FC<ProjectPropsType> = ({icon, title, description, linkToTheProject}) => {
    return (
        <div className={style.skill}>

            <div style={{backgroundImage: `url(${icon})`}}
                 className={style.icon}>

                <a href={linkToTheProject}>
                <button className={style.projectButton}>
                    Посмотреть
                </button>
            </a>




            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>

        </div>
    );
};

