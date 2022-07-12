import React from "react";
import logo from "./logo.png";
import './index.css'
function Header(){
    return(
        <header>
            <nav className="navbar">
                <img className="logo" src={logo} alt="logo"/>
                <ul className="list-item">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header