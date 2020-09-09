import React from 'react'
import Navbar from './Navbar.js'
import Navbar1 from './Navbar1.js'
import AuthContextProvider from './AuthContext.js'
import List from './List.js'
import './App.css'
import ContextProvider from './Context.js'
import Toggle from './Toggle.js'
import ListcontextProvider from './ListContext.js'

const App = () => {
    return (
        <div className="app">
            <ContextProvider>
                <AuthContextProvider>
           <Navbar1 /> 
           <ListcontextProvider>
           <List />

           </ListcontextProvider>
            <Toggle />
                </AuthContextProvider>
            </ContextProvider>
            </div>
    )
}

export default App
