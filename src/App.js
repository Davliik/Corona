import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";
import {MenuContext} from "./Context/Context";

const App = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={"wrapper"}>
            <MenuContext.Provider value={{menuActive, setMenuActive}}>
                <Header/>
            </MenuContext.Provider>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
