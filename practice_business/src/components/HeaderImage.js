import React from 'react';


import '../styles/HeaderImage.scss';

function HeaderImage(props){

    const style = {
        backgroundImage: `url(${props.image})`,
        backgroundPosition: `center ${props.pos}`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return(
       <div className='header-container'>
            <div className='header-img' style={style}></div>
            <div className='header-title'>
                <h2>{props.title}</h2>
            </div>
       </div>
    )
}

export default HeaderImage