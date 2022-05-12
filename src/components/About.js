import React from 'react';
//import './about.css';
import about from '../../src/assets/about.svg';


function About() {
    return (
        <section className="about" id="about">

            <h1 className="heading"> <span>À PROPOS DE</span> NOUS </h1>

            <div className="row">

                <div className="image">
                    <img src='http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg3.jpg' alt="" />
                </div>

                <div className="content">
                    <h3>nous prenons soin de votre vie saine</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in
                        assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates
                        voluptatibus a nihil temporibus deserunt vel?</p>
                </div>

            </div>

        </section>

    )
}

export default About