import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Page404 from './components/Page404';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import BottomScreenInfo from './components/BottomScreenInfo';
import SimpleReactLightbox from "simple-react-lightbox";


import './styles/App.scss';


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  // Header will change based on size of screen, detect change in width
  useEffect(()=>{
      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      }


  })

  function updateWidth(){
    setWidth(window.innerWidth);
  }



  const routes = [
    <NavLink exact className='nav' activeClassName="selected" to="/">Home</NavLink>,
    <NavLink exact className='nav' activeClassName="selected" to="/about">About Us</NavLink>,
    <NavLink exact className='nav' activeClassName="selected" to="/services">What We Offer</NavLink>,
    <NavLink exact className='nav' activeClassName="selected" to="/trainers">Our Trainers</NavLink>,
    <NavLink exact className='nav' activeClassName="selected" to="/appointment">Schedule a Visit</NavLink>
  ]
  return (
    <div className="App">
    <SimpleReactLightbox>
        <Router >
          <ScrollToTop />
          <Header routes={routes} width={width}/>
                <Switch>
                  <Route component={() => <About width={width} />} path="/about" />
                  <Route component={Services} path="/services" />
                  <Route component={() => <Appointment width={width} />} path="/appointment" />
                  <Route component={Trainers} path="/trainers" />
                  <Route exact component={() => <Home width={width} /> } path="/"/>
                  <Route component={Page404} />
                </Switch>
                <div className='bottom-info'>
                    <BottomScreenInfo />
                </div>
          <Footer width={width} routes={[routes[3],routes[4]]}/>
        </Router>
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
