import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import {NavLink} from "react-router-dom";


import gymImages from '../_data/gymData';
import HeaderImage from '../components/HeaderImage';
import headerImage from '../images/weights.jpg';

import '../styles/Services.scss';

function Services(){

    function assignImages(){
        return gymImages.map((image, index) => {
            return (
                <a href={image.img}  key={index} data-attribute="SRL">
                    <img src={image.thumb} alt={image.alt} />
                </a>
            )
        })
    }
    return(
        <main className='services'>
            <div className='services-container'>
                <HeaderImage image={headerImage} title='We Got The Goods' />
                <div className='body-container'>
                <div className='body-about'>
                    <div className='about-title'>
                        <h3>Let's Lift</h3>
                    </div>
                        <p>We have the equipment, space, and trainers to create the motivation to get you into the best shape of your life.</p>
                    </div>
                    <div className='body-information'>
                        <div className='info'>
                            <h3>2000ft Weight Room</h3>
                            <p>Plenty of equipment for the most busy of days.</p>
                        </div>
                        <div className='info'>
                            <h3>Full Boxing Ring</h3>
                            <p>Practice working the ring where champions are made.</p>
                        </div>
                        <div className='info'>
                            <h3>Complete Crossfit Area</h3>
                            <p>Jump, lift, and slam to your hearts content.</p>
                        </div>
                        <div className='info'>
                            <h3>Private Gym Rooms</h3>
                            <p>We understand that working out is a personal thing. Take your time in the private Weight room</p>
                        </div>
                    </div>
                    <div className='body-image-title'>
                        <h2>A Look Inside</h2>
                    </div>
                <SRLWrapper className='body-images'>
                    {assignImages()}
                </SRLWrapper>

                </div>
                    <div className='footer-container'>
                        <div className='footer-tagline'>
                            <h3>Let's Get You In Here</h3>
                        </div>
                        <div className='button-container'>
                            <NavLink className='link' to='/appointment'>
                                <p>Plan A Visit</p>
                            </NavLink>
                        </div>
                    </div>
                    
            </div>
        </main>
    );
};

export default Services;