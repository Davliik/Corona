import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import Hamburger from "../../UI/Hamburger/Hamburger";

const HeaderButton = () => {

    return (
        <div className="header__button">
            <a href="/download">
                <MyButton blue>DOWNLOAD</MyButton>
            </a>
            <Hamburger/>
        </div>
    );
};

export default HeaderButton;