import React from 'react';

import TrainerProfile from './TrainerProfile';

import trainerImages from '../_helpers/trainerImages';

function Trainers(){

    function renderTrainers(){
        return trainerImages.map(image =>{
            return <TrainerProfile key={image.id} src={image.src} alt={image.alt}/>
        })
    }

    return(
        <div>
            {renderTrainers()}
        </div>
    );
};

export default Trainers;