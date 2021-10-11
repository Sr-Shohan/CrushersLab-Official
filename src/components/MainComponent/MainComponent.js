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
import Notfound from '../404/Notfound';
import Career from '../Career/Career';
import Navbar from '../navbar/navbar';

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
            <Notfound />
            <Career />
        </div>
    )
}

export default MainComponent
