import React, { useState } from "react";
import heroImg from '../../assets/img/hero-img.png'
import ModalVideo from 'react-modal-video'
import './hero.css'

function Hero() {
    const [isOpen, setOpen] = useState(false)

    return (

        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" style={{ textAlign: 'left' }}>
                        <h1>Welcome to CrushersLab</h1>
                        <h2>Your Trusted Solution Partner</h2>
                        <div className="d-flex">
                            <a href="#about" class="btn-get-started scrollto">Get Started</a>

                            <React.Fragment>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="8vXKMyn_mXM" onClose={() => setOpen(false)} />
                                <a className="glightbox btn-watch-video">
                                    <i className="bi bi-play-circle" onClick={() => setOpen(true)} /><span>Watch Video</span></a>

                                {/* <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}
                            </React.Fragment>


                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={heroImg} className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero;