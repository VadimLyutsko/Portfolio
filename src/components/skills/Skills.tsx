import React from 'react';
import style from './Skills.module.css';
import {Skill} from './skill/Skill';
import {FormattedMessage} from 'react-intl';
import {useAppSelector} from '../../redux/store';


export const Skills = () => {

    const skillsState = useAppSelector(state => state.skills)

    return (
        <div id={'skills'} className={style.skillsBlock}>
            <h2 className={style.title}><FormattedMessage id="my_skills"/></h2>

            <div className={style.skills}>
                {
                    skillsState.map(
                        skill =>
                            <div key={skill.id}>
                                <Skill description={skill.description}
                                       title={skill.title}
                                       icon={skill.icon}
                                       id={skill.id}/>
                            </div>
                    )
                }
            </div>
        </div>
    );
};

