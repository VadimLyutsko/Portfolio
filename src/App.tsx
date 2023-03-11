import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';
import {Nav} from "./nav/Nav";

function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
