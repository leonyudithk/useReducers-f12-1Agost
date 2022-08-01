import { typesAuth } from "../types/types"



export const actionLogin = (usuario)=>{
    return {
        type: typesAuth.login ,
        payload: usuario
    }
}

export const actionLogout = ()=>{
    return {
        type: typesAuth.logout ,
       
    }
}