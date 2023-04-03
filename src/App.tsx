import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';
import {Nav} from "./nav/Nav";
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from './Error/Error404';
import {Container} from './container/Container';

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
            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Container/>}/>*/}
            {/*    <Route path="404" element={<Error404/>}/>*/}
            {/*    <Route path="*" element={<Navigate to={'404'}/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
