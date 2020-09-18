import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';

function Header(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    </ul>
                </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                <About />
                </Route>
                <Route path="/services">
                <Services />
                </Route>
                <Route path="/">
                <Home />
                </Route>
            </Switch>
            </div>
    </Router>
    )
}

export default Header;