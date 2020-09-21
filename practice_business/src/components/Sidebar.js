import React, {useState, useEffect} from 'react';

import '../styles/Sidebar.scss';

function Sidebar(props){

    const [active, setActive] = useState(true);

    useEffect(()=>{
       setActive(props.sidebar)
    }, [props.sidebar]);

    // call parent function to disable sidebar when link is clicked
    function disable(){
        setActive(false);
        props.disableSidebar();
    }


    return(
        <div className={`sidebar`} style={ { animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards` }} >
            <div className='sidebar-container'>
                <div className='sidebar-logo'>
                    <button>Logo</button> 
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