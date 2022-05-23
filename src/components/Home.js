import React from 'react';

import './home.css'
import SimpleImageSlider from "react-simple-image-slider";

import home from '../../src/assets/home.svg';
const images = [
    { url: "http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg1.jpg" },
    { url: "http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg2.jpg" },
    { url: "http://www.hopital-taharsfarmahdia.tn/themes/jtherczeg-corlate/assets/images/slider/bg3.jpg" },
];

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="home" id="home">

                    <div className="image">
                        <SimpleImageSlider
                            width={600}
                            height={400}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <br></br>

                    <div className="content">
                        <h3>Restez en sécurité, restez en bonne santé</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed autem vero? Magnam, est laboriosam!</p>
                        <a href="#book" className="btn" > CONTACTEZ - NOUS <span className="fas fa-chevron-right"></span></a>
                    </div>
                </section></div>
        )
    }
}

