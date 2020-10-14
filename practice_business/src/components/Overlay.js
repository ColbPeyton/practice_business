import React from 'react';

import '../styles/Overlay.scss';

function Overlay(props){

    function disableOverlay(){
        props.disableOverlay()
    }

    return(
        <div className='overlay'>
            <div className='overlay-container'>
                <div className='overlay-message'>
                    <div className='message-top'>
                        <h2>Successfully Submitted</h2>
                    </div>
                    <div className='message-bot'>
                        <p>We'll be in contact ASAP!</p>
                        <button onClick={disableOverlay}>Okay!</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Overlay;