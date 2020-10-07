import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fName : '',
            lName : '',
            date : '',
            goal : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <div className='form-container'>
                    <div className='form-title'>
                        <h1>Gym Visit</h1>
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

export default Form;