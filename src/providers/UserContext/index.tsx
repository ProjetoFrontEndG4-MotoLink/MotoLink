import React, { createContext, useState } from "react";
import { ILoginFormData } from "../../components/LoginForm";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";

interface IUserProvider{
    children:React.ReactNode
}
interface IUserContext{
    userLogin: (formData: ILoginFormData,setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    logout: () => void;
    user:IUser|null
}
interface IUser {
    email: string;
    name: string;
    id: number;
    userType: string,
    cnh: number,
    plate: string,
    model: string,
    avatar: string
  }
  

export const UserContext=createContext({}as IUserContext)

export const UserProvider=({children}:IUserProvider)=>{
     const [user,setUser]=useState <IUser | null> (null)

    const navigate=useNavigate()

    const userLogin=async(formData:ILoginFormData,setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
try {
    setLoading(true)
    const response=await Api.post("/login",formData)
    localStorage.setItem("@TOKEN", response.data.accessToken);
    localStorage.setItem("@USERID", response.data.user.id);
    setUser(response.data.user)

   if(response.data.user.userType=="empresa"){
    navigate("/dashboardempresas")
   }
   if(response.data.user.userType=="motoboy"){

       navigate("/dashboardmotoboy")
   }
   
    
} catch (error) {
console.log(error)
}finally{
    setLoading(false)
}

    }

    const logout=()=>{
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        navigate("/")
    }
    
    return(

        <UserContext.Provider value={{userLogin,logout,user}}>

            {children}
        </UserContext.Provider>
    )

}