import React from 'react';

import {NavLink} from "react-router-dom";


import HeaderImage from './HeaderImage';

import headerImage from '../images/trainer_header.jpg'

import '../styles/Page404.scss';

function Page404(){
    return(
        <div className='error'>
            <div className='header-container'>
            <HeaderImage image={headerImage} title={`We're Not Sure What Happened`} pos={'center'}/>
            <div className='header-container-btn'>
                    <NavLink className='link' to='/'>
                        <p>Let's Get You Back Home</p>
                    </NavLink>
            </div>
            </div>
        </div>
    )
}

export default Page404;