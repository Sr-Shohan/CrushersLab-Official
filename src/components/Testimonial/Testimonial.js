import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import T1 from '../../assets/img/testimonials/testimonials-4.jpg'
import T2 from '../../assets/img/testimonials/testimonials-2.jpg'
import T3 from '../../assets/img/testimonials/testimonials-3.jpg'
import './Testimonial.css'
export default class Testimonial extends Component {
    render() {
        return (

            <div className="section-title">
                <span>Testimonial</span>
                <h2>Testimonial</h2>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}

                >

                    <div>
                        <img src={T1} />
                        <div className="myCarousel">
                            <h3>David Warm</h3>
                            <h4>Founder,Sfoty</h4>
                            <p>
                                I have done a job with them and they are very talented as a team . Highly Recommended.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={T2} />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Product Manager</h4>
                            <p>
                                The simple and intuitive design makes it easy for me use. I highly
                                recommend to my peers.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={T3} />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Team Lead</h4>
                            <p>
                                I have done a job with them and they are very talented as a team . Highly Recommended.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}