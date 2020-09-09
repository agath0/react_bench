import React from 'react'
import ContextVisitorProvider from './ContextVisitor'
import Navbar from './Navbar'
import ListVisitor from './ListVisitor'
import FormVisitor from './FormVisitor'

export default function App() {
    return (
        <div className="app">

            <ContextVisitorProvider>
                <Navbar />
                <ListVisitor />
                <FormVisitor />


            </ContextVisitorProvider>

        </div>
    )
}
