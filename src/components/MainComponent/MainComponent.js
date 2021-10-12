import React from 'react'
// import Navbar from '../navbar/navbar';
import Hero from '../Hero/hero';
import Main from '../Main/main';
import About from '../About/about';

import Service from '../Servicee/service';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';

import Contact from '../Contact/contact';
import Footer from '../Footer/Footer';

import Navbar from '../navbar/navbar';
import AboutUs from '../About us/AboutUs';

function MainComponent() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Main />
            <About />
            <Service />
            {/* <Portfolio /> */}
            <Testimonial />
            <Contact />
            <Footer />



        </div>
    )
}

export default MainComponent
