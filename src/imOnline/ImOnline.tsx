import React from 'react';
import style from './ImOnline.module.css'
import {ProjectPropsType} from '../components/projects/Projects';
import vkIcon from './vk-svgrepo-com.svg'

export type ContactsPropsType = {
    linkToContact: string
    icon: string
    id: number
}

export const ImOnline = () => {
    const ContactState: ContactsPropsType[] = [
        {
            id: 1,
            icon: 'https://www.svgrepo.com/show/242473/vk-vk.svg',
            linkToContact: 'https://vk.com/oosoby'
        },
        {
            id: 2,
            icon: 'https://www.svgrepo.com/show/242486/instagram.svg',
            linkToContact: 'https://www.instagram.com/lycko.x_x'
        },
        {
            id: 3,
            icon: 'https://www.svgrepo.com/show/242474/linkedin.svg',
            linkToContact: 'https://www.linkedin.com/in/lyutsko/'
        },
        {
            id: 4,
            icon: 'https://www.svgrepo.com/show/242481/telegram.svg',
            linkToContact: 'https://t.me/Vadimgreens'
        },
    ];

    return (
        <div id={'footer'} className={style.contacts}>
            <div className={style.contactsForm}>

                {
                    ContactState.map(fab =>

                        <a href={fab.linkToContact}>
                            <div style={{backgroundImage: `url(${fab.icon})`}}
                                 className={style.miniLogo}>
                            </div>
                        </a>
                    )
                }

            </div>
        </div>
    );
};

