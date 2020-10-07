import React from 'react';

import HeaderImage from './HeaderImage';

import headerImage from '../images/appointmentHeader.jpg';
import '../styles/Appointment.scss';


function Appointment(props){
    return(
        <main className='appointment'>
            <div className={`appointment-container ${props.width <= 1024 ? 'small' : 'large' }`}>
                <div className='appointment-header'>
                    <HeaderImage image={headerImage} title={'Let\'s Get You In Here'} />
                    <div className='header-tagline'>
                        <h2>Fill Out The Form Below</h2>
                    </div>
                    
                </div>
                <div className='appointment-body'>

                </div>
                <div className='appointment-footer'>

                </div>
            </div>
        </main>
    );
}

export default Appointment;