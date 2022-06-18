import React from 'react'
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
