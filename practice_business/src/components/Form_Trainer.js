import React from 'react';

import '../styles/Form_Gym.scss';

class Form_Trainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fName : '',
            lName : '',
            date : '',
            goal : '',
            loaded: false
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
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='form-container trainer' style={ {animation: `${this.loaded ? "" : "slideInTrainer"} 0.5s forwards`}}>
                    <div className='form-title'>
                        <h1>Trainer Appointment</h1>
                    </div>
                    <div className='form-item'>
                        <label>First Name:</label>
                        <input placeholder='Pat' value={this.state.fName} onChange={this.handleChange}/>
                    </div>
                    <div className='form-item'>
                        <label>Last Name: </label>
                        <input placeholder='GymMan' value={this.state.lName} onChange={this.handleChange}/>
                    </div>
                    <div className='form-item'>
                        <label>Date of Visit: </label>
                        <input type='date' value={this.state.fName} onChange={this.handleChange}/>
                    </div>
                    <div className='form-area'>
                        <textarea placeholder='What are your goals?' value={this.state.fName} onChange={this.handleChange}/>
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