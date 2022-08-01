import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {Navigate} from 'react-router-dom'

const PublicRouter = ({children}) => {
    const {user} = useContext(AuthContext)
    
    return (
            user.logged ? <Navigate to="/*"/> : children
            //!user.logged ? children : <Navigate to="/*"/> 
       
    );
};

export default PublicRouter;