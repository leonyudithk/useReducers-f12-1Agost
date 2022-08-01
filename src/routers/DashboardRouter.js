import React from 'react';
import NavBar from '../components/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import Counter from '../components/Counter';

//Rutas que se pueden acceder cuando este ya autenticad
const DashboardRouter = () => {
    return (
        <>
         <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                  
                </Routes>
            
        </>
    );
};

export default DashboardRouter;

