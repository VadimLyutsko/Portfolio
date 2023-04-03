import React from 'react';
import {Nav} from '../nav/Nav';
import {Header} from '../header/Header';
import {Contacts} from '../contacts/Contacts';
import {Skills} from '../skills/Skills';
import {Footer} from '../footer/Footer';
import {Projects} from '../projects/Projects';
import {Main} from '../main/Main';

export const Container = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
            portfolio
        </>
    );
};

