import React, { createContext,Component } from 'react'

export const Context=createContext(); 


export class ContextProvider extends Component {
    state={
        lightTheme:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'},
    }
    toggle=()=>{
        this.setState({lightTheme:!this.state.lightTheme});
    }
    render() {
        return (
            <div>
                <Context.Provider value={{...this.state,toggle:this.toggle}}>
                    {this.props.children}
                     
                </Context.Provider>
                
            </div>
        )
    }
}

export default ContextProvider





