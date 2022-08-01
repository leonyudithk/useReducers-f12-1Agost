import React from 'react';
import AppRouter from './routers/AppRouter';
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return (
    <ChakraProvider>
             <AppRouter/>
    </ChakraProvider>
  );
};

export default App;