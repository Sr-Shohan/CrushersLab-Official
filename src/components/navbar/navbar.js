import React from "react";
import logo from '../../assets/img/navlogo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/"><img src={logo} alt="" /></Link></h1>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li className="active"><Link className="nav-link scrollto active" to="/">Home</Link></li>
                        <li><Link className="nav-link scrollto" to={{ pathname: '/', hash: '#services' }}>Services</Link></li>

                        {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                        <li className="dropdown"><a href="#"><span>About Us</span> <i className="bi bi-chevron-down" /></a>
                            <ul>
                                <li><a href="/">Our Team </a></li>

                                <li><a href="/">Media</a></li>
                                <li><a href="/">About Us</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        <li><Link className="getstarted scrollto" to='/career' >Career</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>{/* .navbar */}
            </div>
        </header>

    )

}
export default Navbar;
