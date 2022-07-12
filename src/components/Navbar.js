import React from "react";
import './styles.css';
import logo from '../images/logo.png';

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav--div">
                <img className="logo" src={logo} alt="logo"/>
                <h2 className="nav--logo_text">ReactFacts</h2>
            </div>
            <h3 className="nav--title">React Course - Project 1</h3>
        </nav>
    )
}