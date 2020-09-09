import React, { useContext } from 'react'
import {Context} from './Context'
import { ListContext } from './ListContext';



export const List = () => {
    const{lightTheme,light,dark}=useContext(Context);
        const theme=lightTheme ? light : dark;
        const {data}=useContext(ListContext)
    return (
        <div className='list' style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    {data.map(obje=>{
                        return(
                            <li key={data.id} style={{background:theme.ui}}>{obje.title}</li>
                        )
                    })}
                    </ul>
                
            </div>

    )
}


export default List