import React from 'react';
import style from './Contacts.module.css';


export const Contacts = () => {


    return (
        <div id={'contacts'} className={style.contactsBlock}>

            <div className={style.contacts}>
                <h3> Contacts form</h3>
                <form className={style.contactsForm}>
                    <input className={style.inputForm} type="text"/>
                    <input className={style.inputForm} type="text"/>
                    <textarea className={style.inputTextArea} placeholder={'Enter text here'}></textarea>
                </form>
                <button className={style.contactsButton}>Send</button>
            </div>
        </div>
    );
};

