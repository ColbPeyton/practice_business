import React from 'react';

function TrainerProfile(props){
    return(
        <div className='profile'>
            <img src={props.image.image} alt={props.image.alt} />
        </div>
    );

}

export default TrainerProfile;