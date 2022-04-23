import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div><section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#"> <i className="fas fa-chevron-right"></i> home </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> services </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> about </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> doctors </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> book </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> review </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> blogs </a>
                </div>

                <div className="box">
                    <h3>our services</h3>
                    <a href="#"> <i className="fas fa-chevron-right"></i> dental care </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> message therapy </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> cardioloty </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis </a>
                    <a href="#"> <i className="fas fa-chevron-right"></i> ambulance service </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                    <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                    <a href="#"> <i className="fas fa-envelope"></i> shaikhanas@gmail.com </a>
                    <a href="#"> <i className="fas fa-envelope"></i> anasbhai@gmail.com </a>
                    <a href="#"> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104 </a>
                </div>

            </div>

            <div className="credit"> created by <span>mr. web designer</span> | all rights reserved </div>

        </section>
        </div>
    )
}

export default Footer