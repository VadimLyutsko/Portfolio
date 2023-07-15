import React, {ReactElement} from 'react';
import style from './Projects.module.css';
import {Project} from './project/Project';
import {FormattedMessage} from 'react-intl';

export type ProjectPropsType = {
    linkToTheProject: string
    description: ReactElement | string
    title: string
    icon: string
    id: number
}

export const Projects = () => {
    const projectState: ProjectPropsType[] = [
        {
            id: 1,
            title: 'Social network',
            icon: 'https://i.imgur.com/8QeXll7.jpeg',
            description: <p><FormattedMessage id="social_network"/></p>,
            linkToTheProject: 'https://vadimlyutsko.github.io/The-Way-of-the-Samurai/'
        },
        {

            id: 2,
            title: 'Todolist',
            icon: 'https://camo.githubusercontent.com/16be8365c473ac26fefb5281597db1e66fce08a43c43e5bd4b67b115b44f82d4/68747470733a2f2f7777772e6c65616465727461736b2e72752f696d616765732f61396438623534383565343962626164373463303236666434656531353063302e6a7067',
            description: <p><FormattedMessage id="big_todolists_project"/></p>,
            linkToTheProject: 'https://vadimlyutsko.github.io/Great-Todolist/'
        },
        {
            id: 3,
            title: 'My homeworks',
            icon: 'https://oneclassblog.com/wp-content/uploads/2017/11/board-928381_1280.jpg',
             description: <p><FormattedMessage id="my_homeworks"/></p>,
            linkToTheProject: 'https://vadimlyutsko.github.io/My-Homeworks/'
        },
        {
            id: 4, title: 'BloggerPlatform',
            icon: 'https://i.pinimg.com/originals/f0/2b/98/f02b984d8be0c58277b05a3287d48998.png',
            description: <p><FormattedMessage id="bloggers_platform"/></p>,
            linkToTheProject: 'https://vadimlyutsko.github.io/BloggerPlatform/'
        },
        {
            id: 5, title: 'MiniTodo',
            icon: 'https://pbs.twimg.com/media/EGCVYsYWoAA-jMC?format=jpg&name=4096x4096',
            description: <p><FormattedMessage id="test_task"/></p>,
            linkToTheProject: 'https://vadimlyutsko.github.io/ToDo_For_Mindbox/'
        },

    ];

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

