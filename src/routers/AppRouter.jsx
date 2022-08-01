import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from '../components/Counter';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBar from '../components/NavBar';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <NavBar/>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/login" element={<Login />} />
                </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;