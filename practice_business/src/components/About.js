import React from 'react';

import '../styles/About.scss';

function About(props){

    return(
        <main className='about'>
            <div className={`about-container ${props.width <= 1024 ? 'small' : 'large' }`}>

            </div>
        </main>
    );
};

export default About;