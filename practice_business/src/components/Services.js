import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";

import gymImages from '../_data/gymData';

import '../styles/Services.scss';

function Services(){

    function assignImages(){
        return gymImages.map((image, index) => {
            return (
                <a href={image.img}  key={index} data-attribute="SRL">
                    <img src={image.img} alt={image.alt} />
                </a>
            )
        })
    }
    return(
        <main className='services'>
            <div className='services-container'>
                <div className='header-img'>

                </div>
                <div className='header-title'>
                    <h2>We Got The Goods</h2>
                </div>
                <div className='body-container'>
                <SRLWrapper>
                    {assignImages()}
                </SRLWrapper>
                </div>
            </div>
        </main>
    );
};

export default Services;