import React from 'react';
import {NavLink} from "react-router-dom";

import TrainerProfile from './TrainerProfile';
import HeaderImage from '../components/HeaderImage';
import headerImage from '../images/gym-room-1180062_1280.jpg';

import trainerImages from '../_data/trainerData';

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
            <HeaderImage image={headerImage} title={`We're Here To Help`} pos={'top'}/>
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