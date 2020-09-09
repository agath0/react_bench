import React,{useState,useEffect} from 'react'


const InputData = ({addData}) => {
    const [input,setInput]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addData(input);
        setInput('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter new data:</label>
                <input type="text" value={input} required onChange={(e)=>setInput(e.target.value)} />
                <input type="submit" value="add data" />
            </form>
            
        </div>
    )
}

export default InputData
