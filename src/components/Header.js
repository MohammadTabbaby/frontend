import React from 'react'
import './header.css'
//import script from '../script'


function Header() {

    return (
        <div>
            <header className="header">

                <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> Parc Informatique Hôpital Universitaire Taher Sfar </a>
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>

                {/*<script src={script}></script>*/}

            </header>
        </div>

    )
}

export default Header