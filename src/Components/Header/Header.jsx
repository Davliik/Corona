import logo from "../../img/logo.svg";
import HeaderMenu from "./HeaderMenu";
import HeaderButton from "./HeaderButton";

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <a href="" className="header__logo">
                    <img src={logo} alt="logo"/>
                </a>
                <HeaderMenu/>
                <HeaderButton />
            </div>
        </header>
    )
}
export default Header