import React, {ReactElement} from 'react';
import style from './Project.module.css';

export type ProjectPropsType = {
    linkToTheProject: string
    description: ReactElement | string
    title: string
    icon: string
    id: number
}

export const Project: React.FC<ProjectPropsType> = ({icon, title, description, linkToTheProject}) => {
    return (
        <div className={style.project}>

            <div style={{backgroundImage: `url(${icon})`}}
                 className={style.icon}>

                <a  target="_blank" href={linkToTheProject}>
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

