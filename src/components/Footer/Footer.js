import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-6">
                            <h3>
                                &lt; CrushersLab /&gt;
                            </h3>
                            <p>Your Trusted Digital Solution Partner </p>
                        </div>
                    </div>
                    <div className="row footer-newsletter justify-content-center">
                        <div className="col-lg-6">
                            <form action method="post">
                                <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" defaultValue="Subscribe" />
                            </form>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="https://www.facebook.com/crusherslab" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="google-plus"><i className="bi bi-skype" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix">
                <div className="copyright text-center ">
                    <h6>copyright © CrushersLab Technologies Ltd</h6>
                </div>
            </div>
        </footer>
    )
}
