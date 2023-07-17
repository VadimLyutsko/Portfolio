import React, {ReactElement} from 'react';
import style from './Projects.module.css';
import {Project} from './project/Project';
import {FormattedMessage} from 'react-intl';
import {useAppSelector} from '../../redux/store';


export const Projects = () => {

    const projectState = useAppSelector(state => state.projects)

    return (
        <div id={'projects'} className={style.projectsBlock}>

            <h2 className={style.title}><FormattedMessage id="my_projects"/></h2>

            <div className={style.projects}>
                {
                    projectState.map(skill =>
                        <div key={skill.id}>
                            <Project linkToTheProject={skill.linkToTheProject}
                                     description={skill.description}
                                     title={skill.title}
                                     icon={skill.icon}
                                     id={skill.id}/>
                        </div>)
                }
            </div>
        </div>
    );
};

