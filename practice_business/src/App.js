import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Page404 from './components/Page404';

import './styles/App.scss';


function App() {

  const routes = [
    <NavLink className='nav' activeClassName="selected" to="/">Home</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/about">About</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/services">Services</NavLink>,
    <NavLink className='nav' activeClassName="selected" to="/contact">Contact</NavLink>
  ]
  return (
    <div className="App">
      <Router >
      <Header routes={routes}/>
              <Switch>
                <Route component={About} path="/about" />
                <Route component={Services} path="/services" />
                <Route component={Contact} path="/contact" />
                <Route exact component={Home} path="/" />
                <Route component={Page404} />
              </Switch>
      </Router>
    </div>
  );
}

export default App;
