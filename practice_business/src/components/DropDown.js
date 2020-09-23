import React from 'react';

function DropDown(props){

    function setActive(){
        props.setActive(props.id);
    }

    return(
        <div className={`class ${props.active ? 'active' : ''}`} onClick={setActive}>
            <div className='class-top'>
                <h3>{props.title}</h3>
                <i className="fas fa-caret-down"></i>
            </div>
            <div className='class-bot'>
                <p>{props.desc}</p>
            </div>
    </div>
    )
}

export default DropDown;