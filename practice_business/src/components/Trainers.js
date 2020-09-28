import React from 'react';

import TrainerProfile from './TrainerProfile';

import trainerImages from '../_helpers/trainerImages';

function Trainers(){

    function renderTrainers(){
        return trainerImages.map((image, index) =>{
            return <TrainerProfile key={index} image={image}/>
        })
    }

    return(
        <div>
            {renderTrainers()}
        </div>
    );
};

export default Trainers;