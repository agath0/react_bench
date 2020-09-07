import React from 'react'
import './User.css'

const User=(props)=> {
    return(
        <div className="person">
    <h1>Name:{props.userData.name}</h1>
    <h1>lastName:{props.userData.lastName}</h1>
    <h1>age:{props.userData.age}</h1>
    <h1>country:{props.userData.country}</h1>
        </div>
    )
}

export default User;