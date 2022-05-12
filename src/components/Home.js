import React from 'react'
import './home.css'
import home from '../../src/assets/home.svg';


function Home() {
    return (
        <section className="home" id="home">

            <div className="image">
                <img src='http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg2.jpg' alt="" />
            </div>

            <div className="content">
                <h3>Restez en sécurité, restez en bonne santé</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                <a href="#book" className="btn" > CONTACTEZ - NOUS <span className="fas fa-chevron-right"></span></a>
            </div>
        </section>

    )
}

export default Home