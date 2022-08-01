import { typesAuth } from "../types/types";


export const authReducers =(state = {}, action)=>{
    switch (action.type) {
        case typesAuth.login:
            return {  
              ...action.payload, 
                logged: true

            }
        case typesAuth.logout:
            return { logged: false}   
         
    
        default:
            return state
         
    }
}