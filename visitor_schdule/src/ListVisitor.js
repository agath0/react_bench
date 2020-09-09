import React,{useContext} from 'react'
import DetailsVisitor from './DetailsVisitor.js'
import { ContextVisitor } from './ContextVisitor'

const ListVisitor = () => {
    const {visitors}=useContext(ContextVisitor);
    return visitors.length ? (
        <div className="listvisitor">
            <ul>
                {visitors.map(obj=>{
                    return(<DetailsVisitor obj={obj} key={obj.id} /> )
                })}
            </ul>
        </div>
    ):(
        <div className="finished">Visitors finished</div>
    )
}

export default ListVisitor
