import React,{useContext} from 'react'
import { ContextVisitor } from './ContextVisitor'

const DetailsVisitor = ({obj}) => {
    const{deleteVisitor}=useContext(ContextVisitor);
    return (
        <li onClick={()=>deleteVisitor(obj.id)}>
            <div className="visitor">{obj.visitor}</div>
            <div className="time">{obj.time}</div>
        </li>
    )
}

export default DetailsVisitor
