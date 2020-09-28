import React from 'react';

function TrainerProfile(props){
    return(
        <div className='profile'>
            <img src={props.src} alt={props.alt} />
        </div>
    );

}

export default TrainerProfile;