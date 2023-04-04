import React, {useState} from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';
import {Nav} from './nav/Nav';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from './Error/Error404';
import {Container} from './container/Container';
import {IntlProvider} from 'react-intl';
import {LOCALES} from '../src/i18n/locales'
import {messages} from '../src/i18n/messages'

function App() {

    const locale = LOCALES.ENGLISH

    const [currentLocale, setCurrentLocale] = useState(locale)

    const handleChange = (value: any) => {
        setCurrentLocale(value)

    }

    return (
        <IntlProvider messages={messages[currentLocale]}
                      locale={currentLocale}
                      defaultLocale={LOCALES.ENGLISH}>
            <div className="App">
                <Header
                    locale={locale}
                    handleChange={handleChange}
                    currentLocale={currentLocale}/>
                <Nav/>
                <Main currentLocale={currentLocale}/>
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
        </IntlProvider>
    );
}

export default App;
