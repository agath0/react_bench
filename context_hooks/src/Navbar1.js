
import React,{useContext} from 'react'
import { Context } from './Context';
import { AuthContext } from './AuthContext';

const Navbar=()=>{
    const{lightTheme,light,dark}=useContext(Context)
    const { isAuthenticated,toggleAuth}=useContext(AuthContext);
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

    );
}
export default Navbar;

