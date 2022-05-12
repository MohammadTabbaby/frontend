import React from 'react'
import './header.css'



function Header() {

    return (
        <div>
            <header className="header">

                <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> EPS Hôpital Tahar Sfar Mahdia </a>
                <nav className="navbar">
                    <a href="#home">Accueil</a>
                    <a href="#facility">Nos Applications</a>
                    <a href="#doctors">Services</a>
                    <a href="#blogs">Actualités</a>
                    <a href="#about">à Propos</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>
            </header>

        </div>

    )
}

export default Header