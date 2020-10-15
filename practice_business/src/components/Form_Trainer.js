import React from 'react';

import Overlay from './Overlay';
import { createBrowserHistory } from 'history'

import '../styles/Form_Gym.scss';

class Form_Trainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fName : '',
            lName : '',
            date : '',
            selectedTrainer : 'Amber',
            workout: '',
            loaded: false,
            overlay: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({loaded: true})
    }
    componentWillUnmount(){
        this.setState({loaded:false})
    }


    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({overlay:true});

    }

    disableOverlay(){
        const history = createBrowserHistory();
        history.go(0)
    }


    renderOverlay(){
        return this.state.overlay
        ? <Overlay  disableOverlay={this.disableOverlay}/>
        : '';
    }


    renderWorkoutOptions(){
        let temp;

        switch(this.state.selectedTrainer){
            case 'Amber': 
                temp = ['Yoga', 'Kickboxing']
                break;
            case 'James': 
                temp = ['Weightlifting', 'Crossfit']
                break;
            case 'Kayla': 
                temp = ['Pound', 'HIIT', 'Crossfit']
                break;
            case 'Rick': 
                temp = ['Weightlifting', 'Pound', 'Muay Thai']
                break;
            default: 
                temp = ['Weightlifting']
                break;
        }

        return temp.map((t, index)=> {
            return <option value={t} key={index}>{t}</option>
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='form-container trainer' style={ {animation: `${this.loaded ? "" : "slideInTrainer"} 0.75s forwards`}}>
                {this.renderOverlay()}
                    <div className='form-title'>
                        <h1>Trainer Appointment</h1>
                    </div>
                    <div className='form-item-container'>
                        <div className='form-item'>
                            <label>First Name:</label>
                            <input placeholder='Pat' value={this.state.fName} onChange={this.handleChange} name={'fName'} type='text'/>
                        </div>
                    </div>
                    <div className='form-item-container even'>
                        <div className='form-item'>
                            <label>Last Name: </label>
                            <input placeholder='GymMan' value={this.state.lName} onChange={this.handleChange} name={'lName'} type='text'/>
                        </div>
                    </div>
                    <div className='form-item-container'>
                        <div className='form-item'>
                            <label>Date of Visit: </label>
                            <input type='date' value={this.state.date} onChange={this.handleChange} name={'date'}/>
                        </div>
                    </div>
                    <div className='form-item-container even'>
                        <div className='form-item'>
                            <label>Trainer: </label>
                            <select  value={this.state.selectedTrainer} onChange={this.handleChange} name={'selectedTrainer'}>
                                <option value="Amber">Amber</option>
                                <option value="James">James</option>
                                <option value="Kayla">Kayla</option>
                                <option value="Pat">Pat</option>
                                <option value="Rick">Rick</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-item-container'>
                        <div className='form-item'>
                        <label>Workout Type: </label>
                            <select  value={this.state.workout} onChange={this.handleChange} name={'workout'}>
                                {this.renderWorkoutOptions()}
                            </select>
                        </div>
                    </div>
                    <div className='form-submit'>
                        <input type='submit'/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form_Trainer;