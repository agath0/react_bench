import React from "react";
import {Switch,Link} from "react-router-dom";
import './Navbar.css'


function Navbar(){
    return(
        <div class="navigator">
                <Switch>
                    <Link to="/" exact>Home</Link>
                </Switch>
                <Switch>
                    <Link to="/products">Products</Link>
                </Switch>
                <Switch>
                    <Link to="/about">About</Link>
                </Switch>
  
        </div>
    )

}

export default Navbar;