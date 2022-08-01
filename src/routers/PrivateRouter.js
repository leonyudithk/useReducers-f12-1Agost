import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {Navigate} from 'react-router-dom'


const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    return (
        user.logged ? children : <Navigate to="/login"/>
       
    );
};

export default PrivateRouter;