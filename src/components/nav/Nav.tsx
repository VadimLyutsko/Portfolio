import React from 'react';
import style from './Nav.module.css';
import logo from './logo.svg'
import {Link} from 'react-scroll';
import {MusicButton} from '../customComponents/musicButton/MusicButton';
import {FormattedMessage} from 'react-intl'


export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navLiLogo}>
                    <Link
                        activeClass={style.active}
                        to="me"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img src={logo} alt=""/>
                    </Link>
                </li>

                <li className={style.navItem}>
                    <Link
                        activeClass={style.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <FormattedMessage id="skills"/>
                    </Link>
                </li>

                <li className={style.navItem}>
                    <Link
                        activeClass={style.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <FormattedMessage id="projects"/>
                    </Link>
                </li>

                {/*<li className={style.navItem}>*/}
                {/*    <Link*/}
                {/*        activeClass={style.active}*/}
                {/*        to="contacts"*/}
                {/*        spy={true}*/}
                {/*        smooth={true}*/}
                {/*        offset={-70}*/}
                {/*        duration={500}*/}
                {/*    >*/}
                {/*        <FormattedMessage id="contacts"/>*/}
                {/*    </Link>*/}
                {/*</li>*/}


                <li className={style.navItem}>
                    <Link
                        activeClass={style.active}
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <FormattedMessage id="footer"/>
                    </Link>
                </li>
            </ul>
            <MusicButton/>
        </nav>


    );
};

