import React from 'react'
import Navbar from '../navbar/navbar'
import Careerr from '../../assets/img/career.svg'
import Footer from '../Footer/Footer'
export default function Career() {
    return (
        <div>
            <Navbar />
            <div className='container pt-5 border img-fluid' >
                <img src={Careerr}></img>

                <p style={{ fontFamily: 'Rubik', fontStyle: 'italic' }}>“Opportunities don’t happen, you create them.” — Chris Grosser</p>
            </div>
            <Footer />
        </div>
    )
}
