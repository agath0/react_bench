import React,{useContext} from 'react'
import {ContextVisitor} from './ContextVisitorReducer'


const Navbar = () => {
    const{visitors}=useContext(ContextVisitor);
    return (
        <div className="navbar">
            <h1>Visitors List</h1>
            <p>You have {visitors.length} visitors remining to be dealt with...</p>
            
            
        </div>
    )
}

export default Navbar
