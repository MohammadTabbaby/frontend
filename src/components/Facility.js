import React from 'react'
import './facility.css'
import facility1 from '../../src/assets/blog-1.jpg';
import facility2 from '../../src/assets/blog-2.jpg';
import facility3 from '../../src/assets/blog-3.jpg';



function Facility() {
    return (
        <div><section className="facility" id="facility">

            <div className="container">


                <h1 className="heading"> <span>our</span> facilities </h1>
                <div className="box-container">

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="our team">
                            <img src={facility3} alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="our lab">
                            <img src={facility1} alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="emergency rooms">
                            <img src={facility3} alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="expert doctors">
                            <img src={facility2} alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="expert doctors">
                            <img src={facility1} alt="" />
                        </a>
                    </div>

                    <div className="box" data-aos="zoom-in">
                        <a href="#" title="emergency rooms">
                            <img src={facility2} alt="" />
                        </a>
                    </div>

                </div>

            </div>

        </section></div>
    )
}

export default Facility