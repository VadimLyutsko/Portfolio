import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from './skill/Skill';

export type SkillPropsType = {
    description: string
    title: string
    icon: string
    id: number
}

export const Skills = () => {
    const skillsState :SkillPropsType[]=[
        {
            id: 1,
            title: 'Html',
            icon: 'https://i.ytimg.com/vi/jMta42LK1nE/maxresdefault.jpg',
            description: 'Description from props Description from props Description from props '
        },
        {
            id: 2,
            title: 'CSS',
            icon: 'https://sun9-62.userapi.com/c857624/v857624861/211220/jyy7xAGBFWc.jpg',
            description: 'Description from props Description from props Description from props '
        },
        {
            id: 3,
            title: 'React',
            icon: 'https://sun9-39.userapi.com/s/v1/if2/0ZAVfo_f6E_dqlHGCmpNOXPq9FS1oqL8FN6FKBdo_A8WZxhFgH_lCJvW4vfWa9gLOxcJTrooRNtFhkQs-a2jesU5.jpg?size=1280x800&quality=96&type=album',
            description: 'Description from props Description from props Description from props '
        },
        {
            id: 4, title: 'Angular',
            icon: 'https://avatars.mds.yandex.net/i?id=f0cc32489e193db71cc840f90dbb3418-6613205-images-thumbs&n=13',
            description: 'Description from props Description from props Description from props '
        },
        {
            id: 5,
            title: 'Some else',
            icon: 'https://i.ytimg.com/vi/itYdfePTmqw/maxresdefault.jpg',
            description: 'Description from props Description from props Description from props '
        },
    ];

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <h2 className={style.title}>Some Header of Skills H2</h2>

                <div className={style.skills}>
                    {
                        skillsState.map(skill =>
                            <div key={skill.id}>
                                <Skill description={skill.description}
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

