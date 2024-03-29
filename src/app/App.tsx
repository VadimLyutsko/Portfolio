import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from '../components/header/Header';
import {Skills} from '../components/skills/Skills';
import {Projects} from '../components/projects/Projects';
import {Nav} from '../components/nav/Nav';
import {IntlProvider} from 'react-intl';
import {LOCALES} from '../i18n/locales'
import {messages} from '../i18n/messages'
import {MyNetworks} from '../components/myNetworks/myNetworks';
import {MainPage} from '../components/mainPage/MainPage';

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
