import React from 'react'
//import './Footer.css'


function Footer() {
    return (
        <div><section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>Liens utiles</h3>
                    <a href="https://mutuelledelasante.com" target="_blank" rel="noopener noreferrer"> <i className="fas fa-globe"></i> Mutuelle de la sante </a>
                    <a href="http://www.santetunisie.rns.tn/fr/" target="_blank" rel="noopener noreferrer"> <i className="fas fa-globe"></i>  Ministère de la santé </a>
                    <a href="https://www.facebook.com/EPS-Hôpital-Tahar-Sfar-Mahdia-1723481731239777" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i> EPS Hôpital Tahar Sfar Mahdia </a>
                    <a href="https://www.facebook.com/OMSTunisie/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i> Organisation mondiale de la Santé Tunisie</a>
                </div>

                <div className="box">
                    <h3>Notre Hôpital</h3>
                    <a href="#services"> <i className="fas fa-chevron-right"></i> Services</a>
                    <a href="#doctors"> <i className="fas fa-chevron-right"></i> Docteurs</a>
                    <a href="#book"> <i className="fas fa-chevron-right"></i> Contactez-nous</a>
                    <a href="#facility"> <i className="fas fa-chevron-right"></i> Nos Applications</a>
                    <a href="#review"> <i className="fas fa-chevron-right"></i> Nos Indicateurs</a>
                </div>

                <div className="box">
                    <h3>Informations de contact</h3>
                    <a href="#"> <i className="fas fa-phone"></i> Tel: 73 109 000 </a>
                    <a href="#"> <i className="fas fa-phone"></i> Fax: 73 109 000 </a>
                    <a href="#"> <i className="fas fa-phone"></i> N° vert: 80 106 925</a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> Mahdia 5100</a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> Jbel Dar Ouaja Hiboun </a>
                </div>

            </div>

            {/*<div className="credit"> created by <span>mr. web designer</span> | all rights reserved </div>*/}
        </section>
        </div>
    )
}

export default Footer