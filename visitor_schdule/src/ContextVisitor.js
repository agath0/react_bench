import React,{useState,createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const ContextVisitor=createContext();


const ContextVisitorProvider = (props) => {
    const [visitors,setVisitors]=useState([
        {visitor:"John",time:"9 am",id:1},
        {visitor:"Jack",time:"3 am",id:2}
    ])
    const addVisitor=(visitor,time)=>{
        setVisitors([...visitors,{visitor,time,id:uuidv4()}])
    }
    const deleteVisitor=(id)=>{
        setVisitors(visitors.filter(obj=>obj.id!==id))
    }
    return (
            <ContextVisitor.Provider value={{visitors,addVisitor,deleteVisitor}}>
                {props.children}
            </ContextVisitor.Provider>
            
    )
}



export default ContextVisitorProvider
