import React from 'react';
import style from './Projects.module.css';
import {Project} from './project/Project';
import {FormattedMessage} from 'react-intl';

export type ProjectPropsType = {
    linkToTheProject: string
    description: string
    title: string
    icon: string
    id: number
}

export const Projects = () => {
    const projectState: ProjectPropsType[] = [
        {
            id: 1,
            title: 'Social network',
            icon: 'https://avatars.mds.yandex.net/i?id=47c73e3bf79ebf996023184c9e7dff1efaf9742f-6254930-images-thumbs&n=13',
            description: 'My little social network',
            linkToTheProject: 'https://vadimlyutsko.github.io/The-Way-of-the-Samurai/'
        },
        {
            id: 2,
            title: 'Todolist',
            icon: 'https://camo.githubusercontent.com/16be8365c473ac26fefb5281597db1e66fce08a43c43e5bd4b67b115b44f82d4/68747470733a2f2f7777772e6c65616465727461736b2e72752f696d616765732f61396438623534383565343962626164373463303236666434656531353063302e6a7067',
            description: 'My big todolist ',
            linkToTheProject: 'https://vadimlyutsko.github.io/Great-Todolist/'
        },
        {
            id: 3,
            title: 'My homeworks',
            icon: 'https://oneclassblog.com/wp-content/uploads/2017/11/board-928381_1280.jpg',
            description: 'Some text about my homeworks ',
            linkToTheProject: 'https://vadimlyutsko.github.io/My-Homeworks/'
        },
        {
            id: 4, title: 'BloggerPlatform',
            icon: 'https://i.pinimg.com/originals/f0/2b/98/f02b984d8be0c58277b05a3287d48998.png',
            description: ' One of the training projects (in progress) ',
            linkToTheProject: 'https://vadimlyutsko.github.io/BloggerPlatform/'
        },
        {
            id: 5, title: 'MiniTodo',
            icon: 'https://pbs.twimg.com/media/EGCVYsYWoAA-jMC?format=jpg&name=4096x4096',
            description: ' Test assignment for hiring ',
            linkToTheProject: 'https://vadimlyutsko.github.io/ToDo_For_Mindbox/'
        },

    ];

    return (
        <div id={'projects'} className={style.skillsBlock}>
            <div className={style.container}>

                <h2 className={style.title}><FormattedMessage id="my_projects"/></h2>

                <div className={style.skills}>
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
        </div>
    );
};

