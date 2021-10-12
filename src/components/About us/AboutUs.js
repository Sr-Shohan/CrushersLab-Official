import React from 'react'
import Navbar from '../navbar/navbar'
import Aboutus from '../../assets/img/aboutUs.svg'
import './AboutUs.css'
import Footer from '../Footer/Footer'
import '../Career/Hiring/Hiring.css'
import Mission from './mission/mission'


export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div >
                <div className='career mt-5'>
                    <img src={Aboutus} className='imgDiv' />
                </div>

                <Mission />
            </div>
            <Footer />
        </>
    )
}
