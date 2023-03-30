import React from 'react';
import style from './Main.module.css';

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h6>👋 Hello, My name is</h6>
                <h1 className={style.myName}>Vadim Lyutsko</h1>
                <p>I'M A FRONTEND DEVELOPER</p>
                <p style={{width: '75%'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea, odio odit officiis quisquam sed.
                    Aperiam, autem consequatur deleniti eveniet harum ipsa laudantium libero molestias quas similique
                    soluta, unde voluptate.
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
                        <div className={style.title}>Download
                            CV
                        </div>
                        <div className={style.description}>
                            <a href="https://drive.google.com/file/d/1vz3RgpKKtAdfc_qKsBMjEpYfy69MWPhp/view?usp=share_link"> 👉 📝 👈 </a>
                        </div>
                    </a>
                </section>

            </div>


            <div className={style.bannerContainer}></div>
            {/*<div className={style.photo}>*/}
            {/*    <img src="https://i.pinimg.com/736x/a7/94/50/a79450796ef296bf93ef60971239a72f--beautiful-places.jpg" alt=""/>*/}
            {/*</div>*/}
        </div>
    );
};

