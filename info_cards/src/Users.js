import React from "react";
import User from "./User.js"
const Users=()=>{
    const data=[
        {name:"Jack",lastName:"Joseph",age:"22",country:"India"},
        {name:"Loosef",lastName:"Jhos",age:"18",country:"US"},
        {name:"Roor",lastName:"Dada",age:"19",country:"Dubai"},
        {name:"Lodard",lastName:"Jada",age:"43",country:"Canada"},
        {name:"Wardf",lastName:"Nasad",age:"92",country:"Mexico"}
    ];

    return(
        <div>
            {data.map((info,i)=>(
                <User key={i} i={i} userData={info} />
            ))}
        </div>
    );
  };


export default Users;