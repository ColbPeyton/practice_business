import React from 'react';

function DropDown(props){


    function callParentFunctionToSetActive(){
        props.active
        ? props.removeActive(props.id)
        : props.setActive(props.id);
    };

    function styleDifficulty(){
        return props.difficulty === 'Beginner'
        ? 'beginner'
        : 'advanced'
    }

    return(
        <div className={`drop-down ${props.active ? 'active' : ''}`} onClick={callParentFunctionToSetActive}>
            <div className='drop-top'>
                <h3>{props.title}</h3>
                <i className="fas fa-caret-down"></i>
            </div>
            <div className='drop-bot'>
                <p className={`difficulty ${styleDifficulty()}`}>{props.difficulty}</p>
                <p>{props.desc}</p>
            </div>
    </div>
    )
}

export default DropDown;