import React from 'react'
//import './book.css'
import book from '../../src/assets/book.svg';

function Book() {
    return (

        <section className="book" id="book">

            <h1 className="heading"> <span>Contactez </span>- Nous </h1>

            <div className="row">

                <div className="image">
                    <img src='http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg1.jpg' alt="" />
                </div>

                <form action="">
                    <h3>Contacter maintenant</h3>
                    <input type="text" placeholder="Votre Nom" className="box" />
                    <input type="number" placeholder="Votre Numéro" className="box" />
                    <input type="email" placeholder="Votre email" className="box" />
                    <input type="submit" value="Envoyer" className="btn" />
                </form>

            </div>

        </section>


    )
}

export default Book