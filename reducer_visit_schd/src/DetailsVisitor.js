import React,{useContext} from 'react'
import { ContextVisitor } from './ContextVisitorReducer'

const DetailsVisitor = ({obj}) => {
    const{dispatch}=useContext(ContextVisitor);
    return (
        <li onClick={()=>dispatch({type:'DELETE_VISITOR',id:obj.id})}>
            <div className="visitor">{obj.visitor}</div>
            <div className="time">{obj.time}</div>
        </li>
    )
}

export default DetailsVisitor
