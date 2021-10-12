import React, { useState } from "react";
import logo from '../../assets/img/navlogo.png'
import { Link } from 'react-router-dom'


function Navbar() {
    let icon = 'bi bi-list mobile-nav-toggle'; 
    // 'bi mobile-nav-toggle bi-x'
    const [isClicked,  setClick] = useState(false);
    const handleClick=()=>{
        isClicked?  setClick(!isClicked): setClick(!isClicked);
    }
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/"><img src={logo} alt="" /></Link></h1>

                <nav id="navbar" className={isClicked?['navbar','navbar-mobile'].join(' '):"navbar"}>
                    <ul>
                        <li className=""><Link className="nav-link scrollto active" to="/">Home</Link></li>
                        <li><a className="nav-link scrollto" href='#services'>Services</a></li>

                        {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                        <li className="dropdown"><a href="#"><span>About Us</span> <i className="bi bi-chevron-down" /></a>
                            <ul>
                                <li><a href="/">Our Team </a></li>

                                <li><a href="/">Media</a></li>
                                <li><Link to='/aboutus'>About Us</Link></li>

                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="/#contact">Contact</a></li>
                        <li><Link className="getstarted scrollto" to='/career' >Career</Link></li>
                    </ul>
                    <i className={isClicked? 'bi mobile-nav-toggle bi-x': 'bi bi-list mobile-nav-toggle'} onClick={()=>handleClick()} />
                </nav>{/* .navbar */}
            </div>
        </header>

    )

}
export default Navbar;
