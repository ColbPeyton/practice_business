import React from 'react';

import HeaderImage from './HeaderImage';
import headerImage from '../images/building.jpg';
import owner from '../images/ownerAbout.jpg';

import '../styles/About.scss';

function About(props){

    return(
        <main className='about'>
            <div className={`about-container ${props.width <= 991 ? 'small' : 'large' }`}>
                <div className='header-container'>
                <HeaderImage image={headerImage} title={`Our Factory`}/>
                </div>
                <div className='about-container-tagline'>
                        <h1>The Story</h1>
                </div>
                <div className='body-container'>
                  <div className='body-about'>
                    <div className='body-img'>
                        <img src={owner} alt='Pat' />
                    </div>
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
                            opened the doors to <span className='the'>THE</span><span className='factory'>FACTORY</span> in beautiful downtown New Orleans. 
                        </p>
                        <p>
                        &emsp; Open all day everyday, <span className='the'>THE</span><span className='factory'>FACTORY</span> has the equipment, classes, people, and location to set
                        you up for success.<span className='the'>THE</span><span className='factory'>FACTORY</span> is here to support you and your active lifestyle no matter the 
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
                                <p><span className='the'>THE</span><span className='factory'>FACTORY</span>: Business District Opens</p>
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
                                <p><span className='the'>THE</span><span className='factory'>FACTORY</span>: French Quarter Opens</p>
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
                                <p>Constructed Private Weight Room & Crossfit Arena At <span className='the'>THE</span><span className='factory'>FACTORY</span>: Frech Quater</p>
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
                                <p>Constructing Yoga Zone At <span className='the'>THE</span><span className='factory'>FACTORY</span>: Business District</p>
                            </div>
                            <div className='timeline-line'></div>
                            <div className='timeline-date'>
                                <h4>2020</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;