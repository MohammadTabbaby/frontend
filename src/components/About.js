import React from 'react';
import './about.css';
import about from '../../src/assets/about.svg';


function About() {
    return (
        <div>
            <h1 className="heading"> about <span>Us</span> </h1>
            <div className='container'>
                <div className='card'>
                    <div className='content'>
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ducimus, quod ex cupiditate ullam in
                            assumenda maiores et culpa odit tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                        </p>
                        <br></br>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero ipsam laborum porro voluptates
                            voluptatibus a nihil temporibus deserunt vel?</p>

                        {/*<a href="#" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>*/}
                        <button className="learn-more">learn More !</button>
                    </div>
                    <img src={about} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About