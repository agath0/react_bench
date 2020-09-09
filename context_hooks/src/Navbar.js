import React from 'react'
import { Context } from './Context';


class Navbar extends React.Component{
    static contextType=Context;
    render(){
        const{lightTheme,light,dark}=this.context;
        const theme=lightTheme?light:dark;
        return(
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Navbar</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;