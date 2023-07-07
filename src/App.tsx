import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {MainPage} from './components/MainPage/MainPage';
import {Skills} from './components/skills/Skills';
import {Projects} from './components/projects/Projects';
import {Nav} from './components/nav/Nav';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from './components/error/Error404';
import {IntlProvider} from 'react-intl';
import {LOCALES} from '../src/i18n/locales'
import {messages} from '../src/i18n/messages'
import {MyNetworks} from './myNetworks/myNetworks';

function App() {


    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

    useEffect(() => {
        let languageFromLS = localStorage.getItem('language')
        languageFromLS && setCurrentLocale(languageFromLS)
    }, [])

    function getInitialLocale() {
        // получаем сохраненные данные
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }

    const handleLanguageChange = () => {
        let languageFromLS = localStorage.getItem('language')
        languageFromLS && setCurrentLocale(languageFromLS)
    }

    const setLanguageToLS = (languageValue: string) => {
        localStorage.setItem('language', languageValue)
        handleLanguageChange()
    }


    return (
        <IntlProvider messages={messages[currentLocale]}
                      locale={currentLocale}
                      defaultLocale={LOCALES.ENGLISH}>
            <div className="App">
                <Header
                    setLanguageToLS={setLanguageToLS}
                    currentLocale={currentLocale}/>
                <Nav/>
                <MainPage currentLocale={currentLocale}/>
                <Skills/>
                <Projects/>
                <MyNetworks/>
                {/*<Routes>*/}
                {/*    <Route path="404" element={<Error404/>}/>*/}
                {/*    <Route path="*" element={<Navigate to={'404'}/>}/>*/}
                {/*</Routes>*/}
            </div>
        </IntlProvider>
    );
}

export default App;
