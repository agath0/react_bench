import React, { Component } from 'react'
import { Context } from './Context';



export class Toggle extends Component {
    static contextType=Context;
    render() {
        const {toggle}=this.context;
        return (
            <button onClick={toggle}>Tooooogle</button>
        )
    }
}

export default Toggle
