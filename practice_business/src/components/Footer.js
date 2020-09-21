import React from 'react';
import '../styles/Footer.scss';

function Footer(props){

    function smallerView(){
        return(
            <div className='footer small'>
                <div className='footer-container'>
                    <button className='link'>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Get Directions</p>
                    </button>
                    <button className='link'>
                        <i className="far fa-calendar-check"></i>
                        <p>Book Appointment</p>
                    </button>
                    <button className='link'>
                        <i className="fas fa-phone"></i>
                        <p>Call Us</p>
                    </button>
                </div>
            </div>
        )
    };

    function largerView(){
        return(
            <div className='footer large'>

            </div>
        )
    };



    

    function renderCorrectView(){
        return props.width <= 1024
        ? smallerView()
        : largerView();
    }

    return(
        renderCorrectView()
    )
}

export default Footer;