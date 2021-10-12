import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <span>Contact</span>
                    <h2>Contact</h2>
                    <p>Don't be Hesitate Please Feel free to Contact </p>
                </div>
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h4>Location:</h4>
                                <p>Sekhertek, Mohammadpur,
                                    House: 28, Road: 10
                                    1207 Dhaka, Bangladesh</p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope" />
                                <h4>Email:</h4>
                                <p>contact@crusherslab.tech</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone" />
                                <h4>Call:</h4>
                                <p>+88 01796063958</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14605.892155945265!2d90.3588734!3d23.7661639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc068af3bb11779a!2sCrushersLab!5e0!3m2!1sen!2sbd!4v1633774790057!5m2!1sen!2sbd" frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen />

                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="https://formspree.io/f/xvodyjyk" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6 mt-3 mt-md-0">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
