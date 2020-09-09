
import React from 'react'
import { Context } from './Context';
import { AuthContext } from './AuthContext';


class Navbar extends React.Component{
    render(){
        return(
            

            <AuthContext.Consumer>
                {(authContext)=>(

            <Context.Consumer>
                {(themecontext)=>{
        const{lightTheme,light,dark}=themecontext;
        const { isAuthenticated,toggleAuth}=authContext;
        const theme=lightTheme?light:dark;
        return(

            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Navbar1</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged in ' : 'Logged out'}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                </ul>
            </nav>
        )
                }}
            </Context.Consumer>
                )}
            </AuthContext.Consumer>            
        )
    }
}

export default Navbar;