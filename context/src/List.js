import React, { Component } from 'react'
import {Context} from './Context'


export class List extends Component {
    static contextType=Context;


    render() {
        const{ lightTheme,light,dark}=this.context;
        const theme=lightTheme ? light : dark;
        return (
            <div className='list' style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>hello</li>
                    <li style={{background:theme.ui}}>hello1</li>
                    <li style={{background:theme.ui}}>hello2</li>
                </ul>
                
            </div>
        )
    }
}

export default List;
