import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Sidebar from './Sidebar';
import '../styles/Header.scss';

import icon from '../images/icons/factory-horizontal.png';

function Header(props){

    const [active, setActive] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    function smallerView(){
        return(
            <div>
                <header className= 'header-container-smaller'>
                    <div className='header-logo'>
                        <NavLink exact className='link' to='/'>
                            <img src={icon} alt='gym icon'/>
                        </NavLink> 
                    </div>
                    <button className={`header-dropdown-container ${active ? 'active' : ''}`} onClick={()=> enableOrDisableSidebar()}>
                        <div className='dropdown'></div>
                        <div className='dropdown'></div>
                        <div className='dropdown'></div>
                    </button>
                </header>
            {renderSidebar()}
            </div>
  
        );
    }

    function largerView(){
        return(
            <header className='header-container-larger'>
                <div className='header-contents top'>
                    <div className='top-bar'>
                        <div className='top-info'>
                            <button><i className="fas fa-phone"></i>  (555)555-5555</button>
                            <button><i className="far fa-calendar-check"></i>  Request An Appointment</button>
                            <button><i className="fas fa-map-marker-alt"></i>  Our Location</button>
                        </div>
                    </div>
                </div>
                <div className='header-contents bottom'>
                    <div className='bottom-bar'>
                        <div className='bottom-logo'>
                        <NavLink exact className='link' to='/'>
                            <img src={icon} alt='gym icon'/>
                        </NavLink>
                            
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

    function renderSidebar(){
        return active 
        ? <Sidebar routes={props.routes} sidebar={sidebar} disableSidebar={enableOrDisableSidebar} />
        : '';
    }

    function enableOrDisableSidebar(){
        if(active){
            setSidebar(false);
            setTimeout(() => {
                setActive(false)
            }, 500);
        }else{
            setSidebar(true)
            setActive(true)
        }

    }

    function renderCorrectView(){
        return props.width <= 991
        ? smallerView()
        : largerView()
    }

    return(
        renderCorrectView()
    )
}

export default Header;