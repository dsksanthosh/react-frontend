import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../Api/AuthenticationApiService";
import { apiClient } from "../Api/ApiClient";

export const authContext = createContext()

export const useAuth = () => useContext(authContext)

export default function AuthProvider({children}){

    const [isAuthenticated,setAuthenticated]=useState(false)

    const [username,setusername]=useState(null)

    const [token,settoken]=useState(null)


async function login(username,password){

    const response=await executeJwtAuthenticationService(username,password)

    try{
        if(response.status===200){
            const JwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setusername(username)
            settoken(JwtToken)

            apiClient.interceptors.request.use(
                (config) => {
                    console.log('intercept')
                    config.headers.Authorization=JwtToken
                    return config
                }
            )

            return true
        }else{
           logout()
            return false
        }
    }catch(error){
        logout()
        return false
    }
}    

    function logout(){
        setAuthenticated(false)
        settoken(null)
        setusername(null)
    }

    return(
        <authContext.Provider value={{isAuthenticated,login,logout,username,token}}>
            {children}
        </authContext.Provider>
    )
}