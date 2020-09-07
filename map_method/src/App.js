import React from 'react';
import './App.css';


class App extends React.Component{
    render(){
        this.state=[
            {Rollno:"1",name:"Luuka"},
            {Rollno:"2",name:"John"},
            {Rollno:"3",name:"Robind"},
            {Rollno:"4",name:"Ausap"},
            {Rollno:"5",name:"Ameer"}
        ];
    return(
        <div className="app">
                <h1>Mapping</h1>
            <div className="app__body">
                {this.state.map((data)=>{
                    return(
                        <React.Fragment>
                        <h1>{data.name}</h1>
                        <span>Roll.No:{data.Rollno}</span>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
  }
}
export default App;