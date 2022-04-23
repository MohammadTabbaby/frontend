import React from 'react'
import './home.css'
import home from '../../src/assets/home.svg';


function Home() {
    return (
        <div className='container'>
            <div className='card'>
                <div className='content'>
                    <h3>stay safe, stay healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                    <br></br>
                    {/*<a href="#" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>*/}
                    <button className="learn-more">contact us</button>
                </div>
                <img src={home} alt="" />
            </div>
        </div>
    )
}

export default Home