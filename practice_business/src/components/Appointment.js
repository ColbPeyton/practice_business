import React,{useState} from 'react';

import HeaderImage from './HeaderImage';
import BottomScreenInfo from './BottomScreenInfo';
import FormGym from './Form_Gym';
import FormTrainer from './Form_Trainer';

import headerImage from '../images/appointmentHeader.jpg';
import '../styles/Appointment.scss';


function Appointment(props){
    const [gymForm, setGymForm] = useState(true);

    function renderForm(){
        return gymForm 
        ? <FormGym type={'gym'}/>
        : <FormTrainer type={'trainer'}/>;
    }
    
    return(
        <main className='appointment'>
            <div className={`appointment-container ${props.width <= 1024 ? 'small' : 'large' }`}>
                <div className='appointment-header'>
                    <HeaderImage image={headerImage} title={'Let\'s Get You In Here'} />
                    <div className='header-tagline'>
                        <h2>Fill Out The Form Below</h2>
                    </div>

                <div className='form-buttons'>
                    <button 
                        className={`form-selector top ${gymForm ? 'active' : ''}`}
                        onClick={()=> setGymForm(true)}
                        >Gym Visit
                    </button>
                    <button 
                        className={`form-selector bottom ${gymForm ? '' : 'active'}`}
                        onClick={()=> setGymForm(false)}
                        >Trainer Appointment
                    </button>
                </div>
                </div>
                <div className='appointment-body'>
                    {renderForm()}
                </div>
                <div className='bottom-info'>
                    <BottomScreenInfo />
                </div>
            </div>
        </main>
    );
}

export default Appointment;