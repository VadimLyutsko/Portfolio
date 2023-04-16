import React from 'react';
import style from './Main.module.css';
import {FormattedMessage} from 'react-intl'

type MainPropsType = {
    currentLocale?: string
}

export const Main:React.FC<MainPropsType> = ({currentLocale}) => {

    const lastTitleClassName =  currentLocale === 'en-US' ? style.titleEn :style.titleRu

    return (
        <>
        <div className={style.main90}>
            <div className={style.container}>
                {/*<h6>👋 Hello, My name is</h6>*/}
                <h6><FormattedMessage id="hello_to"/></h6>
                <h1 className={style.myName}><FormattedMessage id="my_name"/></h1>
                <div className={style.profText}><p className={style.typingText}><FormattedMessage id="my_prof"/></p></div>
                <p className={style.myDescription}>
                    <FormattedMessage id="about_me"/>
                </p>


                {/*<div className={style.poster}>Download*/}
                {/*    CV 📝*/}
                {/*<div  className={style.myCv}>*/}
                {/*    <a href="https://drive.google.com/file/d/1vz3RgpKKtAdfc_qKsBMjEpYfy69MWPhp/view?usp=share_link">-----Download*/}
                {/*        CV 📝</a>*/}
                {/*</div>*/}
                {/*    </div>*/}


                <section className={style.works}>
                    <a className={style.captionLink}>
                        <div className={lastTitleClassName}>
                            <FormattedMessage id="download_cv"/>
                        </div>
                        <div className={style.description}>
                            <a target={'_blank'} href="https://drive.google.com/file/d/1vz3RgpKKtAdfc_qKsBMjEpYfy69MWPhp/view?usp=share_link"> 👉
                                📝 👈 </a>
                        </div>
                    </a>
                </section>

            </div>


            <div className={style.bannerContainer}></div>
            {/*<div className={style.photo}>*/}
            {/*    <img src="https://i.pinimg.com/736x/a7/94/50/a79450796ef296bf93ef60971239a72f--beautiful-places.jpg" alt=""/>*/}
            {/*</div>*/}
        </div>
            <div className={style.main10}></div>
        </>
    );
};

