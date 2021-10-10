import React from 'react'
import Navbar from '../navbar/navbar'
import Notfounds from '../../assets/img/404Page.svg'
export default function Notfound() {
    return (
        <div>
            <Navbar />
            <div className='container img-fluid' >
                <img src={Notfounds}></img>
                <h3 style={{ fontFamily: 'Rubik' }}>Oops, the page you're looking for doesn't exist</h3>

            </div>
        </div>
    )
}
