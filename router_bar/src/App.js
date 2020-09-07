import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link } from "react-router-dom";
import Navbar from './Navbar.js';
import Products from './Products.js';
import About from './About.js';
import './App.css';

function App(){
    return(
        <div className="app">
            <Router>
                <Navbar />
              <Route path="/products">
                  <Products />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Router>
        </div>
    )
}

export default App;
