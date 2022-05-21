import React, { useState } from 'react';
import axios from 'axios';

import book from '../../src/assets/book.svg';
//import './book.css'

export default function Book() {
    const [name, setName] = useState('');
    const [num_telephone, setNum_telephone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const submitHandle = (e) => {
        e.preventDefault();
        const Postdata = { name, num_telephone, email, description }
        console.log(Postdata)

        axios.post(`http://127.0.0.1:8000/api/ContactUs?`, Postdata)
            .then(res => {
                console.log(Postdata);
                console.log(res);
                console.log(res.data);
                alert("votre message a été envoyé avec succès");
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <section className="book" id="book">
            <h1 className="heading"> <span>Contactez </span>- Nous </h1>
            <div className="row">
                <div className="image">
                    <img src='http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg1.jpg' alt="" />
                </div>
                <form onSubmit={submitHandle}>
                    <h3>Contacter maintenant</h3>
                    <input type="text" placeholder="Votre Nom" className="box" value={name} onChange={(e) => (setName(e.target.value))} />
                    <input type="text" pattern="[0-9]{8}" placeholder="Votre numero" className="box" value={num_telephone} onChange={(e) => (setNum_telephone(e.target.value))} />
                    <input type="email" placeholder="Votre email" className="box" value={email} onChange={(e) => (setEmail(e.target.value))} />
                    <input type="text" placeholder="Votre Message" className="box" value={description} onChange={(e) => (setDescription(e.target.value))} />
                    <input type="submit" value="Envoyer" className="btn" />
                </form>
            </div>
        </section>
    )
}

