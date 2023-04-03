import React from 'react';
import style from './Nav.module.css';
import logo from './logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll';
import {DesignSwitch} from '../DesignSwitch/DesignSwitch';

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
                        Skills
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
                        Projects
                    </Link>
                </li>

                <li className={style.navItem}>
                    <Link
                        activeClass={style.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contacts
                    </Link>
                </li>


                <li className={style.navItem}>
                    <Link
                        activeClass={style.active}
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Footer
                    </Link>
                </li>
            </ul>
            <DesignSwitch/>
        </nav>


    );
};

