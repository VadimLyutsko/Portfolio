import {FormattedMessage} from 'react-intl';
import React, {ReactElement} from 'react';

type InitialStateType = {
    description: ReactElement | string
    title: string
    icon: string
    id: number
}

const initialState = [
    {
        id: 1,
        title: 'Html',
        icon: 'https://www.ozgurceyaz.com/wp-content/uploads/2017/01/html-web-sayfasi-olusturma-web-tasarim-dersleri-1-6.jpg',
        description:
            <p><FormattedMessage id="html_skill"/> <a target="_blank"
                                                      style={{textDecoration: 'none'}}
                                                      href="src/components/skills/Skills"> 📕 </a>
            </p>
    },
    {
        id: 2,
        title: 'CSS',
        icon: 'https://www.freecodecamp.org/news/content/images/size/w1000/2019/10/css.png',
        description:
            <p><FormattedMessage id="css_skill"/> <a target="_blank"
                                                     style={{textDecoration: 'none'}}
                                                     href="src/components/skills/Skills"> 📘 </a>
                <FormattedMessage id="sass_skill"/><a target="_blank"
                                                      style={{textDecoration: 'none'}}
                                                      href="src/components/skills/Skills"> 📗 </a>
                <a target="_blank"
                   style={{textDecoration: 'none'}}
                   href="https://www.youtube.com/watch?v=TOlqVNC86XI&list=PL0lO_mIqDDFVv3vF9BG1j1RwfGcQEoxs2"> 📓 </a>
            </p>
    },
    {
        id: 3,
        title: 'JS/ES6+',
        icon: 'https://res.cloudinary.com/practicaldev/image/fetch/s--e-jk8wPK--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://cl.ly/0d09244c1c6e/Image%25202018-10-11%2520at%25207.20.51%2520PM.png',
        description:
            <p><FormattedMessage id="js_skill"/> <a target="_blank"
                                                    style={{textDecoration: 'none'}}
                                                    href="src/components/skills/Skills"> 📒 </a>
                <FormattedMessage id="js_skill_course"/><a target="_blank"
                                                           style={{textDecoration: 'none'}}
                                                           href="https://www.itgid.info/ru"> 🎓 </a>
            </p>
    },
    {
        id: 4,
        title: 'React',
        icon: 'https://sun9-39.userapi.com/s/v1/if2/0ZAVfo_f6E_dqlHGCmpNOXPq9FS1oqL8FN6FKBdo_A8WZxhFgH_lCJvW4vfWa9gLOxcJTrooRNtFhkQs-a2jesU5.jpg?size=1280x800&quality=96&type=album',
        description: <p><FormattedMessage id="react_skill"/> <a target="_blank"
                                                                style={{textDecoration: 'none'}}
                                                                href="src/components/skills/Skills"> ⚛️ </a>
        </p>
    },
    {
        id: 5, title: 'Redux',
        icon: 'https://chriscourses.com/blog/redux.jpg',
        description: <FormattedMessage id="redux_skill"/>
    },
    {
        id: 6, title: 'Typescript',
        icon: 'https://ykkim97.github.io/assets/built/images/typeScript-logo.png',
        description: <FormattedMessage id="typescript_skill"/>
    },
    {
        id: 7,
        title: 'Storybook',
        icon: 'https://images.velog.io/images/kimhyo_0218/post/2bd34fd8-1e59-49d9-b490-37997b6e84b5/storybook.webp',
        description: <FormattedMessage id="storybook_skill"/>
    },
    {
        id: 8,
        title: 'React Query',
        icon: 'https://miro.medium.com/v2/resize:fit:1200/1*vD4mY6iEQ34HTcAYyPTlnw.png',
        description: <FormattedMessage id="react_query_skill"/>
    },
];

export const skillsReducer = (state: InitialStateType[]  = initialState, action: ActionsType): InitialStateType[] => {
    switch (action.type) {
        case 'CORRECT_PAYLOAD':
            return [...state]
        default:
            return [...state]
    }
}

const mySocialNetworksDataAC = (projectsData: InitialStateType ) => {
    return {
        type: 'CORRECT_PAYLOAD',
        projectsData
    }
}

type mySocialNetworksDataActionType = ReturnType<typeof mySocialNetworksDataAC>

type ActionsType =
    mySocialNetworksDataActionType
