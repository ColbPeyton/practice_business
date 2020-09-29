import React from 'react';
import {NavLink} from "react-router-dom";

import TrainerProfile from './TrainerProfile';

import trainerImages from '../_helpers/trainerImages';

import '../styles/Trainers.scss';

function Trainers(){

    function renderTrainers(){
        return trainerImages.map((image, index) =>{
            return <TrainerProfile key={index} image={image} id={index + 1}/>
        })
    }

    return(
        <div className='trainers'>
            <div className='header-container'>
                <div className='header-img'>

                </div>
                <div className='header-title'>
                    <h2>We're Here To Help</h2>
                </div>
                <div className='header-container-btn'>
                        <NavLink className='link' to='/appointment'>
                            <p>Let's Get Started</p>
                        </NavLink>
                    </div>
            </div>

            <div className='body-container'>
                <div className='contact'>
                    <p>Let's Meet the Experts</p>

                </div>
                <div className='trainer-profiles'>
                    {renderTrainers()}
                </div>
            </div>

        </div>
    );
};

export default Trainers;