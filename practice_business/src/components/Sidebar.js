import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import icon from '../images/icons/factory-horizontal.png';


import '../styles/Sidebar.scss';

function Sidebar(props){

    const [active, setActive] = useState(true);
    const [height, setHeight] = useState(0);
    useEffect(()=>{
       setActive(props.sidebar)

    }, [props.sidebar]);

    useEffect(()=>{
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            setHeight(window.pageYOffset);
        }else{
            setHeight(0);
        }

        console.log(height);
    }, [props.sidebar, height])

    // call parent function to disable sidebar when link is clicked
    function disable(){
        setActive(false);
        props.disableSidebar();
    }

    return(
        <div className={`sidebar`} style={ {animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards`} }>
            <div className='sidebar-container' style={{top: height}}>
                <div className='sidebar-logo'>
                    <NavLink className='link' to='/' onClick={() => disable()}>
                        <img src={icon} alt='gym icon'/>
                    </NavLink> 
                </div>
                <div className='sidebar-container-links'>
                    <nav>
                        <ul>
                            {props.routes.map((route, index) => <li onClick={()=> disable()} key={index}>{route}</li> )}
                        </ul>
                    </nav>
                    <div className='sidebar-number'>
                        <button>(555) 555-5555</button>
                    </div>
                </div>
 
            </div>
        </div>
    )
}

export default Sidebar;