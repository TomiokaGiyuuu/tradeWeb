import './navbar.css'
import {useContext} from "react";

const Navbar = () => {

    return (
        <div className="navbarContainer">
            <div className="navbarWrapper">
                <img src = "/images/Vector.svg" alt=''/>
                <div className="navbarLogo">AliGroup</div>
                <div className="navbarThings"></div>
                <div className="navbarRight">Зайти</div>
            </div>
        </div>
    );
};

export default Navbar;