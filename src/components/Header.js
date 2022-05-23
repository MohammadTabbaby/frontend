import React from 'react'
import './header.css'
import './Menu.css'
function Header() {

    return (
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <header className="header">

                <a href="#" className="logo"> <i className="fas fa-heartbeat"></i> EPS Hôpital Tahar Sfar Mahdia </a>
                <nav className="navbar">
                    <a href="#home">Accueil</a>
                    <a href="#home"> </a>
                    <div class="dropdown">
                        <button class="dropbtn">Applications</button>
                        <div class="dropdown-content">
                            <a href="#"> Application 1 </a>
                            <a href="#"> Application 2 </a>
                            <a href="#"> Application 3 </a>
                            <a href="#"> Application 4 </a>
                            <a href="#"> Application 5 </a>
                            <a href="#"> Application 6 </a>
                            <a href="#"> Application 7 </a>
                            <a href="#"> Application 8 </a>
                        </div>
                    </div>

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