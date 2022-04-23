import React from 'react'
import './reviews.css'
import pic1  from '../../src/assets/pic-1.png';
import pic2  from '../../src/assets/pic-2.png';
import pic3  from '../../src/assets/pic-3.png';

function Reviews() {
    return (
        <div><section className="review" id="review">

            <h1 className="heading"> client's <span>review</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={pic1} alt="" />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                        aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                        minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                </div>

                <div className="box">
                    <img src={pic2} alt="" />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                        aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                        minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                </div>

                <div className="box">
                    <img src={pic3} alt="" />
                    <h3>john deo</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sapiente nihil
                        aperiam? Repellat sequi nisi aliquid perspiciatis libero nobis rem numquam nesciunt alias sapiente
                        minus voluptatem, reiciendis consequuntur optio dolorem!</p>
                </div>

            </div>

        </section></div>
    )
}

export default Reviews