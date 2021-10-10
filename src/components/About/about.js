import React from 'react'
import aboutImg from '../../assets/img/about.svg'
import check from '../../../node_modules/bootstrap-icons/icons/check-circle-fill.svg'

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={aboutImg} className="img-fluid" style={{
                            maxWidth: '100%',
                            height: '100%'
                        }} alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" style={{ textAlign: 'left' }}>
                        <h3 style={{ fontFamily: 'rubik', fontWeight: '500' }}>Our Work Strategy </h3>
                        <p className="fst-italic">
                            We Follow the Rules that are Proven in Corporate World -
                        </p>
                        <ul className='icon-color'>
                            <li> <i class="bi bi-check-circle"></i>  Collect Requirement </li>
                            <li> <i class="bi bi-check-circle"></i>  Analysis Requirement</li>
                            <li> <i class="bi bi-check-circle"></i>  Design Your Requirement</li>
                            <li> <i class="bi bi-check-circle"></i>  Implementation </li>
                            <li> <i class="bi bi-check-circle"></i>  Testing</li>
                            <li> <i class="bi bi-check-circle"></i> Deploy and Maintenance </li>
                        </ul>
                        <p>
                            Although you have your Own Work Process You can share with Us and We can implement Process as per Your Strategy
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About