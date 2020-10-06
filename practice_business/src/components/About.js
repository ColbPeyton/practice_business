import React from 'react';

import HeaderImage from './HeaderImage';
import BottomScreenInfo from './BottomScreenInfo';
import headerImage from '../images/building.jpg';
import owner from '../images/ownerAbout.jpg';

import '../styles/About.scss';

function About(props){

    return(
        <main className='about'>
            <div className={`about-container ${props.width <= 1024 ? 'small' : 'large' }`}>
                <div className='header-container'>
                <HeaderImage image={headerImage} title={`Our Location`}/>
                </div>
                <div className='about-container-tagline'>
                        <h1>Our Story</h1>
                </div>
                <div className='body-container'>
                    <div className='body-about'>
                        <img src={owner} alt='Pat' />
                        <div className='body-info'>
                            <p>
                                Founded in the early 90s. Our Man Pat wanted to create a gym where everyone was accepted and
                                can work out without judgement. He wanted to put the Power back in to the gym.
                            </p>
                        </div>
                    </div>
                    <div className='body-secondary'>
                        <p>
                        &emsp;Pat has been in the gym his entire life. After years of managing a bix box gym he saw
                            the issues with their form of a judgement free zone. In 1991, Pat decided enough was enough and 
                            opened the doors to Power Gym in beautiful downtown New Orleans. 
                        </p>
                        <p>
                        &emsp; Open all day everyday, Power Fitness has the equipment, classes, people, and location to set
                        you up for success. Power Fitness is here to support you and your active lifestyle no matter the 
                        goals you've set.
                        </p>
                    </div>
                </div>
                <div className='timeline'>
                    <div className='timeline-title'>
                        <h2>Timeline</h2>
                    </div>
                    <div className='timeline-container'>
                        <div className='timeline-info'>
                            <div className='timeline-date'>
                                <h4>1991</h4>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-data'>
                                <p>Power Fitness Business District Opens</p>
                            </div>
                        </div>
                        <div className='timeline-info even'>
                        <div className='timeline-data'>
                                <p>Voted NOLA's Best New Gym</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>1993</h4>
                            </div>

                        </div>
                        <div className='timeline-info'>
                            <div className='timeline-date'>
                                <h4>1996</h4>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-data'>
                                <p>Power Fitness French Quarter Opens</p>
                            </div>
                        </div>
                        <div className='timeline-info even'>
                        <div className='timeline-data'>
                                <p>Added Kickboxing & Muay Thai Classes</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>1997</h4>
                            </div>
                        </div>
                        <div className='timeline-info'>
                            <div className='timeline-date'>
                                <h4>1999</h4>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-data'>
                                <p>Constructed Full Boxing Ring At Both Locations</p>
                            </div>
                        </div>
                        <div className='timeline-info even'>
                        <div className='timeline-data'>
                                <p>Added Crossfit, Pound, & HIIT classes</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>2002</h4>
                            </div>
                        </div>
                        <div className='timeline-info'>
                            <div className='timeline-date'>
                                <h4>2006</h4>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-data'>
                                <p>Constructed Private Weight Room & Crossfit Arena At Frech Quater Location</p>
                            </div>
                        </div>
                        <div className='timeline-info even'>
                        <div className='timeline-data'>
                                <p>Awarded NOLA's Friendliest Gym</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>2009</h4>
                            </div>
                        </div>
                        <div className='timeline-info'>
                            <div className='timeline-date'>
                                <h4>2015</h4>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-data'>
                                <p>Constructed Second Weight Room At Both Locations</p>
                            </div>
                        </div>
                        <div className='timeline-info even'>
                        <div className='timeline-data'>
                                <p>Currently Constructing Yoga Zone At Business District Location</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>2020</h4>
                            </div>
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

export default About;