import React from 'react'
import './mission.css'
import reactlogo from '../../../assets/img/react-logo.png'

export default function Mission() {
    return (
        <div class="container">
            <div class="row margin-bottoms ">
                <h3 style={{ textAlign: 'center', marginTop: '2rem', fontWeight: '800' }}>ABOUT US</h3>
                <div class="col-xs-12 col-lg-6 mt-5">
                    {/* job card */}
                    <div class="card">
                        <div class="card-body shadow">
                            <h5 style={{ color: 'red', textAlign: 'center' }}>Mission</h5>
                            <br />
                            <p>To build a quality and comprehensive technology infrastructure, establish and maintain an effective operational environment, and deliver quality, prompt, cost effective and reliable technology services.
                                We leverage our experience, expertise and diverse resources to the best interest of our partners, so we can keep growing together.
                            </p>
                            <br />

                        </div>
                    </div>

                </div>
                <div class="col-xs-12 col-lg-6 hiring mt-5">

                    <div class="card">
                        <div class="card-body shadow">
                            <h5 style={{ color: 'red', textAlign: 'center' }}>Vision</h5>
                            <br />
                            <p>Our vision is to empower the future by enabling the global business community. We want to contribute to the economy by creating improved learning and employment opportunities. We strive to create values that not only reflect the success of our partners and stakeholders but also create an impact around that helps to make this world a little smarter and a lot better place.</p>
                            <br />


                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}
