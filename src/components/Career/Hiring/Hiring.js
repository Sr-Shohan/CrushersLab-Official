import React from 'react'
import './Hiring.css'
import reactlogo from '../../../assets/img/react-logo.png'

export default function Hiring() {
    return (
        <div class="container">
            <div class="row margin-bottoms ">
                <h3 style={{ textAlign: 'center', marginTop: '2rem', fontWeight: '800' }}>INTERNSHIP OPPORTUNITY </h3>
                <div class="col-xs-12 col-lg-6 hiring">
                    {/* job card */}
                    <div className="mobile-wrapper">
                        <article className="job-card shadow">
                            <div className="company-logo-img">
                                <img src={reactlogo} />
                            </div>
                            <div className="job-title">Jr. Frontend Engineer</div>
                            <div className="company-name">Internship</div>
                            <div className="skills-container">
                                <div className="skill">React js</div>
                                <div className="skill">React Router</div>
                                <div className="skill">Figma to React</div>
                            </div>
                            <div className="btn-container">
                                <button className="apply buttons"><span style={{ fontWeight: 'bold' }}>career@crusherslab.tech</span></button>

                                {/* <button className="save buttons">career@crusherslab.tech</button> */}
                            </div>

                        </article>
                    </div>

                </div>
                <div class="col-xs-12 col-lg-6 hiring mt-5">

                    <div class="card">
                        <div class="card-body shadow">
                            <h5 style={{ color: 'red', textAlign: 'center' }}>Responsibilities</h5>
                            <br />
                            <ul>
                                <li>Developing new user-facing features using React.js</li>
                                <li>Building reusable components and front-end libraries for future use</li>
                                <li>Translating designs and wireframes into high quality code</li>
                            </ul>
                            <br />
                            <h5 style={{ color: 'red', textAlign: 'center' }}>Skill</h5>

                            <ul>
                                <li>Strong proficiency in JavaScript, including DOM manipulation.</li>
                                <li>Thorough understanding of React.js and its core principles</li>
                                <li>Experience with popular React.js workflows (such as Redux)</li>
                                <li>Familiarity with newer specifications of EcmaScript(ES6)</li>
                                <li>Familiarity with RESTful APIs</li>
                            </ul>

                        </div>
                    </div>





                </div>

            </div>
        </div >

    )
}
