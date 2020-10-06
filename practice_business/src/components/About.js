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
                                can work out without judgement. He wanted to put the Power back in to the gym where all is welcome.
                            </p>
                        </div>
                    </div>
                    <div className='body-secondary'>
                        <p>
                        &emsp;Pat has been in the gym his entire life. After years of managing a bix box gym he saw
                            the issues with their form of a judgement free zone. In 1991, Pat decided enough was enough and 
                            openened the doors to Power Gym in beautiful downtown New Orleans. 
                        </p>
                        <p>
                        &emsp; Open all day everyday, Power Fitness has the equipment, classes, people, and location to set
                        you up for success. Power Fitness is here to support you and your active lifestyle no matter the 
                        goals you've set.
                        </p>
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