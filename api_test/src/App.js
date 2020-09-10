import React, { Component } from 'react'
import './App.css'

export class App extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        //using a simple api from this site
        //https://jsonplaceholder.typicode.com/users
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isLoaded:true,
                items:json
            })
        })
    }
    render() {
        var{isLoaded,items}=this.state;

        if(!isLoaded){
            return(
            <div>Its just Loading...</div>
            );
        }
        else{
            return(
                <div className="app">
                    <ul>
                        {items.map(obj=>(
                            <li key={obj.id} className="person">
                                Name:{obj.name}
                                Email:{obj.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
        return (
            <div className="app">
                
            </div>
        )
    }
}

export default App
