import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login';
import { AuthContext } from '../context/authContext';
import { authReducers } from '../reducers/authReducers';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const AppRouter = () => {

    const [user, dispatch] = useReducer(authReducers,{}, init)

    useEffect(() => {
        if (!user) return
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <BrowserRouter>
                <Routes>
                               
                    <Route path="/login" element={
                                                <PublicRouter>
                                                        <Login />
                                                </PublicRouter>
                                                 } />


                    <Route path="/*" element={
                                            <PrivateRouter>
                                                        <DashboardRouter />
                                            </PrivateRouter>
                                        } />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default AppRouter;