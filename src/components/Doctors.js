import React, { Component } from 'react'
import axios from 'axios';

//import './about.css';
import about from '../../src/assets/about.svg';


export default class About extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/getAllService`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
                console.log(results);
            })
    }

    render() {
        return (
            <div><section className="doctors" id="doctors">
                <h1 className="heading"> Nos <span> Services</span> </h1>
                <div className="box-container">

                    {this.state.results.map((service, index) => (
                        <div className="box">
                            <img src={service.image} alt="" style={{ width: "200px" }} />
                            <h3 key="{index}">{service.nom_service}</h3>
                        </div>

                    ))}

                </div>
            </section>
            </div>
        )
    }
}
