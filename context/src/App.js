import React from 'react'
import Navbar from './Navbar.js'
import Navbar1 from './Navbar1.js'
import AuthContextProvider from './AuthContext.js'
import List from './List.js'
import './App.css'
import ContextProvider from './Context.js'
import Toggle from './Toggle.js'

const App = () => {
    return (
        <div className="app">
            <ContextProvider>
                <AuthContextProvider>
           <Navbar1 /> 
           <List />
            <Toggle />
                </AuthContextProvider>
            </ContextProvider>
            </div>
    )
}

export default App
