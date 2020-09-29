import React from 'react';

import '../styles/TrainerProfile.scss';

function TrainerProfile(props){
    return(
        <div className={`profile ${props.id % 2 === 0 ? 'even' : ''}`}>
            <div className='profile-img'>
                <img src={props.image.image} alt={props.image.alt} />
            </div>
            <div className='profile-info'>
                <p className='name'>{props.image.name}</p>
                <p className='focus'>{props.image.focus}</p>
                <p className='desc'>{props.image.desc}</p>
            </div>
        </div>
    );

}

export default TrainerProfile;