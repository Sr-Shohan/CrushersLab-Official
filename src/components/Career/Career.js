import React from 'react'
import Navbar from '../navbar/navbar'
import Careerr from '../../assets/img/career.svg'
import './Career.css'
import Footer from '../Footer/Footer'
import Hiring from './Hiring/Hiring'

export default function Career() {
    return (
        <>
            <Navbar />
            <div >
                <div className='career'>
                    <img src={Careerr} className='imgDiv' />
                </div>
                <p style={{ fontFamily: 'Rubik', fontStyle: 'italic', textAlign: 'center' }}>“Opportunities don’t happen, you create them.” — Chris Grosser</p>

                <Hiring />
            </div>
            <Footer />
        </>
    )
}
