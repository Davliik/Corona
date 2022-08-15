import React, {useContext} from 'react';
import {MenuContext} from "../../Context/Context";

const Hamburger = () => {

    const menuContext = useContext(MenuContext)

    return (
        <div id="icon-menu"
             onClick={() => menuContext.setMenuActive(!menuContext.menuActive)}
             className={!menuContext.menuActive ? "icon-menu active" : "icon-menu"}>
            <span></span>
        </div>
    );
};

export default Hamburger;