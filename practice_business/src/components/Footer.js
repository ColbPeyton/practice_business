import React from 'react';
import {NavLink} from "react-router-dom";

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
                    <NavLink className='link' to='/appointment'>
                        <i className="far fa-calendar-check"></i>
                        <p>Schedule a Visit</p>
                    </NavLink>
                    <NavLink className='link' to='/contact'>
                        <i className="fas fa-phone"></i>
                        <p>Call Us</p>
                    </NavLink>
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