import React,{useContext,useState} from 'react'
import { ContextVisitor } from './ContextVisitor'

const FormVisitor = () => {
    const {addVisitor}=useContext(ContextVisitor)
    const [visitor,setVisitor]=useState('');
    const [time,setTime]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addVisitor(visitor,time);
        setVisitor('');
        setTime('');
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter visitor name" value={visitor} onChange={(e)=>setVisitor(e.target.value)} required />
            <input type="text" placeholder="Enter the visiting time" value={time} onChange={(e)=>setTime(e.target.value)} required />
            <input type="Submit" value="Add new Visitor" />
        </form>
    )
}

export default FormVisitor
