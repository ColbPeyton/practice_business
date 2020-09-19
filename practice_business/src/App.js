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
import Page404 from './components/Page404';

import './App.css';


function App() {

  const routes = [
    <NavLink activeClassName="selected" to="/">Home</NavLink>,
    <NavLink activeClassName="selected" to="/about">About</NavLink>,
    <NavLink activeClassName="selected" to="/services">Services</NavLink>
  ]
  return (
    <div className="App">
      <Header routes={routes}/>
      <Router >
              <Switch>
                <Route component={About} path="/about" />
                <Route component={Services} path="/services" />
                <Route exact component={Home} path="/" />
                <Route component={Page404} />
              </Switch>
      </Router>
    </div>
  );
}

export default App;
