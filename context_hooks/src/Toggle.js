import { Context } from './Context';
import React,{useContext} from 'react'

const Toggle = () => {
    const{toggle}=useContext(Context);
    return (
        <button onClick={toggle}>Tooogler</button>
            
    )
}

export default Toggle
