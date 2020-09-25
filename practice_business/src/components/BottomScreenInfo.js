import React from 'react';

import '../styles/BottomScreenInfo.scss';

function BottomScreenInfo(){
    return(
        <div className='bottom-screen'>
            <div className='links'>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            </div>
            <div className='info'>
                <p>(555) 555-5555</p>
                <p>FakeGym@FakeGym.com</p>
                <p>1234 Grove St. New Orleans, LA</p>
            </div>
        </div>
    )
}

export default BottomScreenInfo;