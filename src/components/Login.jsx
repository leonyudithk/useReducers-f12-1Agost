import React, { useContext } from 'react';
import { Text, Button } from '@chakra-ui/react';
import { AuthContext } from '../context/authContext';
import { actionLogin } from '../action/actionAuth';
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const usuario ={
        email: 'f12@gamil.com',
         pass: '12345'
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            console.log('handleloginSubmit')
            dispatch(actionLogin(usuario))
            navigate('/')
    }

    return (
        <div>
            <Text>Dentro de Login</Text> 
        <form onSubmit={handleSubmit}>
             
                <Button type="submit" colorScheme='pink' px={4} >Login</Button>
        </form>
            
        </div>
    );
};

export default Login;