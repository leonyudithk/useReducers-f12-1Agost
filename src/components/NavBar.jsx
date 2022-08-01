import React, { useContext } from 'react'
import { Flex, Image, Text, Box, Link, Button } from '@chakra-ui/react'
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { actionLogout } from '../action/actionAuth'


const NavBar = () => {

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout =()=>{
            dispatch(actionLogout())
            console.log('deslogiado')
            navigate('/login')

    }

    return (
        <Flex
        bg="tomato"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
    >
        <Flex flexDirection="row" justifyContent="left" alignItems="center">
            <Image maxWidth="5%"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                size={30}
            />
            <Text pl={3} color="white" fontSize="20px">
                MyApp
            </Text>
        </Flex>
        <Box display="flex" justifyContent="space-around" alignItems="center">
            <Link
                as={NavLink}
                to="/home"
                px={2}
                fontSize="20px"
                style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
            >
                Home</Link>
            <Link
                as={NavLink}
                to="/counter"
                px={2}
                fontSize="20px"
                style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}
            >
                Counter</Link>
          
            <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={handleLogout}>Logout</Button>
        </Box>
    </Flex>
    )
}

export default NavBar
