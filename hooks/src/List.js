import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import InputData from './InputData'



const List = () => {
        const [data,setData]=useState([
        {title:'hwosufulll',id:1},
        {title:'smartfw',id:2},
        {title:'beutiful',id:3}
    ])
    const [num,setNum]=useState(10);
    const addData=(title)=>{
        setData([...data,{title,id:uuidv4()}])
    }
    
    useEffect(()=>{
        console.log('useEffect',data);
    },[data])
    useEffect(()=>{
        console.log('useEffect',num);
    },[num])
    return (
        <div className="list">
            <ul>
                {data.map(obje=>{
                    return(<li key={obje.id}>{obje.title}</li>)
                })}
            </ul>
            <InputData addData={addData} />
            <button onClick={()=>setNum(num+1)}>Increment number: {num}</button>
            

        </div>
    )
}

export default List
