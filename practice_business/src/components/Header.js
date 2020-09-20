import React, {useState} from 'react';
import '../styles/Header.scss';

function Header(props){

    const [active, setActive] = useState(false)

    function smallerView(){
        return(
        <header className= 'header-container-smaller'>
            <div className='header-logo'>
                <button>Logo</button> 
            </div>
            <button className={`header-dropdown-container ${active ? 'active' : ''}`} onClick={()=> setActive(!active)}>
                <div className='dropdown'></div>
                <div className='dropdown'></div>
                <div className='dropdown'></div>
            </button>
        </header>  
        );
    }

    function largerView(){
        return(
            <header className='header-container-larger'>
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


    function renderCorrectView(){
        return window.innerWidth <= 1024
        ? smallerView()
        : largerView()
    }


    return(
        renderCorrectView()
    )
}

export default Header;