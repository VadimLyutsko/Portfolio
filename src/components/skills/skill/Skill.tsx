import React, {ReactElement} from 'react';
import style from './Skill.module.css';

export type SkillPropsType = {
    description: ReactElement | string
    title: string
    icon: string
    id: number
}

export const Skill: React.FC<SkillPropsType> = ({icon, title, description, id}) => {
    return (
        <div key={id} className={style.skill}>
            <div className={style.icon}>
                <img src={icon} alt=""/>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {description}
            </span>
        </div>
    );
};

