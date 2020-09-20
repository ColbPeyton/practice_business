import React from 'react';
import '../styles/Header.scss';

function Header(props){
    return(
        <header className='header-container'>
            <div className='header-contents top'>
                <div className='top-bar'>
                    <div className='top-info'>
                        <button>(555)555-5555</button>
                        <button>Request An Appointment</button>
                        <button>Our Location</button>
                    </div>
                </div>
            </div>
            <div className='header-contents bottom'>
                <div className='bottom-bar'>
                    <div className='bottom-logo'>
                        <button>Logo</button>
                    </div>
                        <div className='bottom-nav'>
                            <nav>
                                <ul>
                                    {props.routes.map((route, index) => <li key={index}>{route}</li> )}
                                </ul>
                            </nav>
                    </div>
                </div>
            </div>
    </header>
    )
}

export default Header;