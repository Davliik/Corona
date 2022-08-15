import React, {useContext} from 'react';
import {MenuContext} from "../../Context/Context";

const HeaderMenu = () => {

    const active = useContext(MenuContext)

    const items = [
        {text: 'HOME', href: '/'},
        {text: 'FEATURES', href: '/'},
        {text: 'SUPPORT', href: '/'},
        {text: 'CONTACT US', href: '/'}
    ]

    if (!active.menuActive) {
        document.querySelector('body').classList.add('lock')
    } else {
        document.querySelector('body').classList.remove('lock')
    }

    return (
        <div className="header__menu menu" >
            <nav className={active.menuActive ? "menu__body" : "menu__body active"}>
                <ul className="menu__list">
                    {items.map((i, index) =>
                        <li key={index} className="menu__item">
                            <a href={i.href} className="menu__link">{i.text}</a>
                        </li>)}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;