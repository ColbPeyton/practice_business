import React from 'react';
import {NavLink} from "react-router-dom";

import DropDownContainer from './DropDownContainer';
import BottomScreenInfo from './BottomScreenInfo';

import DropDownData from '../_data/DropDownData';

import sideImage from '../images/z_gym4.png';

import '../styles/Home.scss';

function Home(props){

    return(
        <main className='home'>
            <div className={`home-container ${props.width <= 1024 ? 'small' : 'large' }`}>
                <div className='home-container-img'>
                </div>
                <div className='home-container-top'>
                    <div className='home-container-tagline'>
                        <h1>Power</h1>
                        <h2>Fitness</h2>
                    </div>
                    <div className='home-container-btn'>
                        <NavLink className='link' to='/appointment'>
                            <p>Let's Get To Work</p>
                        </NavLink>
                    </div>
                </div>
                <div className='home-container-body'>
                    <div className='body-tagline'>
                        <p>Gym in New Orleans, LA</p>
                    </div>
                    <div className='body-about'>
                        <h3>We Put You to Work</h3>
                        <p>Helping the local community stay in shape for the past 30 years.</p>
                    </div>
                    <div className='body-information'>
                        <div className='info'>
                            <h3>Always Available</h3>
                            <p>Open 24 hours a day.</p>
                        </div>
                        <div className='info'>
                            <h3>We Don't Judge</h3>
                            <p>Beginner or Expert, all are welcome.</p>
                        </div>
                        <div className='info'>
                            <h3>Weights/Crossfit</h3>
                            <p>A little something for everyone.</p>
                        </div>
                        <div className='info'>
                            <h3>Here for you!</h3>
                            <p>Get helped by pros to take your fitness routine to the next level.</p>
                        </div>
                    </div>
                </div>
                <div className="home-paralax-container">
                    <div className='paralax'></div>
                </div>
                <div className='home-classes'>
                    <div className='classes-title'>
                        <h2>Classes</h2>
                    </div>
                <div className='classes-image-container'>
                    <DropDownContainer data={DropDownData}/>
                    <div className='classes-image'>
                        <img src={sideImage} alt='Man punching' />
                    </div>
                </div>
                
                </div>
                <div className='bottom-info'>
                    <BottomScreenInfo />
                </div>
            </div>
        </main>
    );
};

export default Home;