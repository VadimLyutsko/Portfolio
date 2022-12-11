import React from 'react';
import style from './Skill.module.css';

export const Skill = () => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>Icon from props</div>
            <h3 className={style.title}>Title props H3</h3>
            <span className={style.description}>
                Description from props Description from props Description from props Description from props Description from props Description from props Description from props Description from props
            </span>
        </div>
    );
};

