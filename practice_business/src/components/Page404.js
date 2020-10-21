import React from 'react';

import {NavLink} from "react-router-dom";


import HeaderImage from './HeaderImage';

import headerImage from '../images/trainer_header.jpg'

import '../styles/Page404.scss';

function Page404(){
    return(
        <div className='error'>
            <div className='error-img'>
                <HeaderImage image={headerImage} title={`Something Went Wrong...`} pos={'center'}/>
            </div>
            <div className='btn'>
                    <NavLink className='link' to='/'>
                        <p>Let's Get You Back Home</p>
                    </NavLink>
            </div>
        </div>
    )
}

export default Page404;