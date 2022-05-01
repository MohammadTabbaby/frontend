import React from 'react'
//import './book.css'
import book from '../../src/assets/book.svg';

function Book() {
    return (

        <section className="book" id="book">

            <h1 className="heading"> <span>book</span> now </h1>

            <div className="row">

                <div className="image">
                    <img src={book} alt="" />
                </div>

                <form action="">
                    <h3>book appointment</h3>
                    <input type="text" placeholder="your name" className="box" />
                    <input type="number" placeholder="your number" className="box" />
                    <input type="email" placeholder="your email" className="box" />
                    <input type="date" className="box" />
                    <input type="submit" value="book now" className="btn" />
                </form>

            </div>

        </section>


    )
}

export default Book