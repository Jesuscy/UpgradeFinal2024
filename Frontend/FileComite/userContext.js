import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => {
    const [token, setToken] = useState({
  
    })
    
    const getToken = () => {

        return token;
    }

    const changeToken = (newToken) => {
        setToken({ newToken })
    }
    const deleteToken = () => {
   
        
        setToken({});

    }
    return { token, changeToken, deleteToken, getToken }
}