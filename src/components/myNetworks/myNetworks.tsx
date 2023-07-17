import React from 'react';
import style from './myNetworks.module.css'
import {useAppSelector} from '../../redux/store';

export const MyNetworks = () => {


const contactState = useAppSelector(state => state.contactsState)

    return (
        <div id={'footer'} className={style.contacts}>
            <div className={style.contactsForm}>

                {
                    contactState.map(fab =>

                        <a key={fab.id}  target="_blank" href={fab.linkToContact}>
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

