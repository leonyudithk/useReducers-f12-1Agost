import React, { useReducer } from 'react';
import { Button } from '@chakra-ui/react';
import { counterReducer, init, initialState } from '../reducers/counterReducer';
import { types } from '../types/types';

const Counter = () => {
  
    const [counter, dispatch] = useReducer(counterReducer, initialState, init)

    return (
        <div>
        <h1>es: {counter}</h1>
            <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={()=>dispatch({type: types.increment})}>+1</Button>
            <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={()=>dispatch({type: types.decrement})}>-1</Button>
            <Button variant="outline" type="submit" fontSize="20px" marginLeft="20px" onClick={()=>dispatch({type: types.reset})}>Reset</Button>
          
        
        
        </div>
    );
};

export default Counter;