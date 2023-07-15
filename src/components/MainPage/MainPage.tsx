import React from 'react';
import style from './MainPage.module.css';
import {FormattedMessage} from 'react-intl'

type MainPropsType = {
    currentLocale?: string
}

export const MainPage:React.FC<MainPropsType> = ({currentLocale}) => {

    const lastTitleClassName =  currentLocale === 'en-US' ? style.resumeBlockEn :style.resumeBlockRu

    return (
        <>
        <div className={style.main90}>
            <div className={style.somePage}></div>
            <div className={style.container}>
                {/*<h6>👋 Hello, My name is</h6>*/}
                <h5><FormattedMessage id="hello_to_1"/></h5>
                <h5><FormattedMessage id="hello_to_2"/></h5>
                <h1 className={style.myName}><FormattedMessage id="my_name"/></h1>
                <hr/>
                <div className={style.profText}><p className={style.typingText}><FormattedMessage id="my_prof"/></p></div>


                <section className={style.works}>
                    <div className={style.captionLink}>
                        <div className={lastTitleClassName}>
                            <FormattedMessage id="download_cv"/>
                        </div>
                        <div className={style.downloadResumeBlock}>
                            <a target={'_blank'} href="https://drive.google.com/file/d/1vz3RgpKKtAdfc_qKsBMjEpYfy69MWPhp/view?usp=share_link"> 👉
                                📝 👈 </a>
                        </div>
                    </div>
                </section>


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




            </div>


            <div className={style.bannerContainer}></div>
            {/*<div className={style.photo}>*/}
            {/*    <img src="https://i.pinimg.com/736x/a7/94/50/a79450796ef296bf93ef60971239a72f--beautiful-places.jpg" alt=""/>*/}
            {/*</div>*/}
        </div>
        </>
    );
};

