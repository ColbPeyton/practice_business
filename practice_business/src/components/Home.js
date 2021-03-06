import React from 'react';
import {NavLink} from "react-router-dom";

import DropDownContainer from './DropDownContainer';

import DropDownData from '../_data/DropDownData';

import sideImage from '../images/z_gym4.png';
import aboutImg from '../images/about.jpg';
import logo from '../images/icons/factory vertical.png';

import '../styles/Home.scss';

function Home(props){


    function smallView(){
        return (
            <main className='home'>
            <div className={`home-container small`}>
                <div className='home-container-img'>
                </div>
                <div className='home-container-top'>
                    <div className='home-container-tagline'>
                        <img src={logo} alt='The Factory' />
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

            </div>
        </main>
        )
    }

    function largeView(){
        return(
            <main className='home'>
            <div className={`home-container large`}>
                <div className='home-header'>
                    <div className='header-title'>
                            <div className='title'>
                                <img src={logo} alt='The Factory' />
                            </div>
                            <div className='header-container-btn'>
                            <NavLink className='link' to='/appointment'>
                                <p>Let's Get To Work</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='home-container-body'>
                    <div className='body-tagline'>
                        <p>Gym in New Orleans, LA</p>
                    </div>
                    <div className='body-about'>
                        <div className='about-head'>
                            <a href="#info"><i className="fas fa-angle-down"></i></a>
                        </div>
                        <div className='about-container'>
                            <div className='about-text'>
                                <h3>We Put You to Work</h3>
                                <p>Helping the local community stay in shape for the past 30 years.</p>
                            </div>
                            <div className='about-img'>
                                <img src={aboutImg} alt='Man lifting weights' />
                            </div>
                        </div>
                        
                    </div>
                    <div id='info' className='info-title'><h1>What We Offer</h1></div>
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

            </div>
        </main>
        )
    }

    function renderScreenBasedOnSize(){
        return props.width <= 991
        ? smallView()
        : largeView();
    }

    return(
        renderScreenBasedOnSize()
    );
};

export default Home;