import React from 'react';
import style from './myNetworks.module.css'
import {ProjectPropsType} from '../projects/Projects';
import vkIcon from './vk-svgrepo-com.svg'
import {useAppSelector} from '../../app/store';

export type ContactsPropsType = {
    linkToContact: string
    icon: string
    id: number
}

export const MyNetworks = () => {


const contactState = useAppSelector(state => state.contactState)

    return (
        <div id={'footer'} className={style.contacts}>
            <div className={style.contactsForm}>

                {
                    contactState.map(fab =>

                        <a key={fab.id} href={fab.linkToContact}>
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

