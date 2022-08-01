import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import NavBar from '../components/NavBar';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <NavBar/>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;