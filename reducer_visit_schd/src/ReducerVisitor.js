
import {v4 as uuidv4} from 'uuid'

export const ReducerVisitor=(state,action)=>{
    switch(action.type){
        case "ADD_VISITOR":
            return [...state,{
                visitor:action.obj.visitor,
                time:action.obj.time,
                id :uuidv4()
            }]
        case "DELETE_VISITOR":
            return state.filter(obj=>obj.id!==action.id)
        default:
            return state
    }
}