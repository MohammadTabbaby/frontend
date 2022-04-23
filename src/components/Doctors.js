import React from 'react'
import './doctors.css'
import doc1 from '../../src/assets/doc-1.jpg';
import doc2 from '../../src/assets/doc-2.jpg';
import doc3 from '../../src/assets/doc-3.jpg';
import doc4 from '../../src/assets/doc-4.jpg';
import doc5 from '../../src/assets/doc-5.jpg';
import doc6 from '../../src/assets/doc-6.jpg';

function Doctors() {
    return (
        <div><section className="doctors" id="doctors">

            <h1 className="heading"> our <span>doctors</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={doc1} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc2} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc3} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc4} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc5} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

                <div className="box">
                    <img src={doc6} alt="" />
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div className="share">
                        <a href="#" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                    </div>
                </div>

            </div>

        </section></div>
    )
}

export default Doctors