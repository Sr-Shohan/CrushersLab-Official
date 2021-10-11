import React from 'react';
import Navbar from '../navbar/navbar';
import notfound from '../../assets/img/404Page.svg';
import { Link } from 'react-router-dom';
import './Notfound.css';
export default function Notfound() {
    return (
        <>
            {/* <Navbar /> */}
            <div >


                <div className='notFound'>
                    <img src={notfound} className='imgDiv' />
                </div>
                <h3 style={{ fontFamily: 'Rubik', textAlign: 'center', marginTop: '100px' }}>Oops, the page you're looking for doesn't exist</h3>
                <div className="backToHome">
                    <Link to='/' >{`<< Back To Home`} </Link>
                </div>




            </div>
        </>
    )
}
