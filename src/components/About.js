import React, { Component } from 'react'
import axios from 'axios';

//import './about.css';
import about from '../../src/assets/about.svg';


export default class About extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/AboutUs`)
            .then(res => {
                const results = res.data;
                this.setState({ results });
            })
    }

    render() {
        return (
            <section className="about" id="about">
                <h1 className="heading"> <span>À PROPOS DE</span> NOUS </h1>
                <div className="row">
                    <div className="image">
                        <img src={this.state.results.image} alt="" />
                    </div>
                    <div className="content">
                        <h3>{this.state.results.titre}</h3>
                        <p>{this.state.results.description}</p>
                    </div>
                </div>
            </section>
        )
    }
}
