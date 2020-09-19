import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';

import '../styles/Header.scss';

function Header(props){
    console.log(props.routes)
    return(
        <header className='header-container'>
            <div className='header-contents'>
                <div className='top-bar'>
                    <div className='top-info'>
                        <button>(555)555-5555</button>
                        <button>Request An Appointment</button>
                        <button>Our Location</button>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='bottom-logo'>
                        <button>Logo</button>
                    </div>
                        <div className='bottom-nav'>
                            <nav>
                                <ul>
                                <li>
                                    {props.routes[0]}
                                </li>
                                <li>
                                    {props.routes[1]}
                                </li>
                                <li>
                                    {props.routes[2]}
                                </li>
                                </ul>
                            </nav>
                    </div>
                </div>
            </div>
    </header>
    )
}

export default Header;