import React from "react";
import logo from '../../assets/img/navlogo.png'
function Navbar() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><a href=""><img src={logo} alt="" /></a></h1>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="active"><a className="nav-link scrollto active" href="#">Home</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li className="dropdown"><a href="#"><span>About Us</span> <i className="bi bi-chevron-down" /></a>
                            <ul>
                                <li><a href="#team">Our Team </a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Media</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
            </div>
        </header>

    )

}
export default Navbar;
