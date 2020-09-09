import React,{useState,createContext} from 'react'

export const ListContext=createContext();

const ListcontextProvider = (props) => {
    const [data,setData]=useState([
        {title:'hwosufulll',id:1},
        {title:'smartfw',id:2},
        {title:'beutiful',id:3},
        {title:'beutiful',id:4},
        {title:'beutiful',id:5},
        {title:'beutiful',id:6},
        {title:'beutiful',id:7},
        {title:'beutiful',id:8},
        {title:'beutiful',id:9}
 

    ])
    return (
        <ListContext.Provider value={{data}}>
            {props.children}

        </ListContext.Provider>
    )
}

export default ListcontextProvider
