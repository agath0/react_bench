
import React,{useReducer,createContext,useEffect} from 'react'
import {ReducerVisitor} from './ReducerVisitor'
export const ContextVisitor=createContext();


const ContextVisitorProvider = (props) => {
    const [visitors,dispatch]=useReducer(ReducerVisitor,[],()=>{
        const localData=localStorage.getItem('visitors');
        return localData ? JSON.parse(localData):[];
    });

    useEffect(()=>{
        localStorage.setItem('visitors',JSON.stringify(visitors))
    },[visitors])
    return (
            <ContextVisitor.Provider value={{visitors,dispatch }}>
                {props.children}
            </ContextVisitor.Provider>
            
    )
}



export default ContextVisitorProvider
