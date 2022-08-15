import React from 'react';
import googlePlay from "../../img/google-play.png";
import appStore from "../../img/app-store.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__items">
                    <a href="" className="footer__item">
                        <img src={googlePlay} alt="Google play"/>
                    </a>
                    <a href="" className="footer__item">
                        <img src={appStore} alt="App store"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;