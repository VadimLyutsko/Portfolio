import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../container/Container.module.css';
import {Project} from './project/Project';

export type ProjectPropsType = {
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
            description: 'My little social network'
        },
        {
            id: 2,
            title: 'Todolist',
            icon: 'https://camo.githubusercontent.com/16be8365c473ac26fefb5281597db1e66fce08a43c43e5bd4b67b115b44f82d4/68747470733a2f2f7777772e6c65616465727461736b2e72752f696d616765732f61396438623534383565343962626164373463303236666434656531353063302e6a7067',
            description: 'My big todolist '
        },
        {
            id: 3,
            title: 'My homeworks',
            icon: 'https://i.pinimg.com/originals/65/1c/31/651c317caa3b7e7302354d3ee46dc78d.jpg',
            description: 'Some text about my homeworks '
        },
        {
            id: 4, title: 'Improved_counter',
            icon: 'https://www.pinclipart.com/picdir/big/253-2537838_barcode-transparent-png-stickpng-abarcode-free-online-clipart.png',
            description: ' Description from props '
        },

    ];

    return (
        <div id={'projects'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <h2 className={style.title}>My projects</h2>

                <div className={style.skills}>
                    {
                        projectState.map(skill =>
                            <div key={skill.id}>
                                <Project description={skill.description}
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

