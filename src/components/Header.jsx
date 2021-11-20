import React  from 'react'
import logo from "../assets/images/logo-desktop.svg"
import logoDark from "../assets/images/logo-mobile-modo-noct.svg"

import "./Header.css"
const Header = ({setDark,dark}) => {
    const darkMode = ()=>{
        setDark(!dark)
    }
    return (
        <div className="header-container">
            <img 
            className="gifo" 
            alt="imagen portada" 
            src={dark ? logoDark : logo}
            />
            <div>
                <button 
                onClick={darkMode} 
                className="btn-theme">
                    {dark ? "Modo ligth" : "Modo Dark" }
                </button>
            </div>
        </div>
    )
}

export default Header
