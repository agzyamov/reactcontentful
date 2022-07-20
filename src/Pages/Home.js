import { Component } from "react";
import React from "react";
import Slider1 from '../Images/slider_one.jpeg'
import './main.css'
class Home extends Component {
    render() {
        return (
            <div>
                {/* Carousel section starts here */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slider1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={Slider1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    {/* Carousel section ends here */}
                    <section id="feature">
                        <div className="container text-center pt-4">
                            <h2>Features</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante nulla, eget tempus leo pretium sit amet. Nullam scelerisque at nibh id imperdiet.</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-laptop"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-comments"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-leaf"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-cogs"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-download"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="feature-wrap">
                                        <i className="fa fa-heart"></i>
                                        <h2>Fresh and clean</h2>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                                    </div>
                                </div>
                            </div>                       
                        </div>
                    </section>
                </div>

            </div>
        );
    }
}

export default Home