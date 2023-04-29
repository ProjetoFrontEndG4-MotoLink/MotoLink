import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../../components/LoginForm";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { IRegisterMotoboyFormData } from "../../components/RegisterFormMotoboy";
import { IRegisterEmpresasFormData } from "../../components/RegisterEmpresasForm";

interface IUserProvider {
  children: React.ReactNode;
}
interface IUserContext {
  userLogin: (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  logout: () => void;
  user: IUser | null;
  registerEmpresa: (FormData: IRegisterEmpresasFormData) => void;
  registerMotoboy: (FormData: IRegisterMotoboyFormData) => void;
  load:boolean
}
interface IUser {
  email: string;
  name: string;
  id: number;
  userType: string;
  cnh: number;
  plate: string;
  model: string;
  avatar: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [load,setLoad]=useState(true)

  const navigate = useNavigate();

useEffect(()=>{
  const token = localStorage.getItem("@TOKEN");
  const id = localStorage.getItem("@USERID");

  const autoLogin=async(setLoad:React.Dispatch<React.SetStateAction<boolean>>)=>{
    
    try {
      
      const response=await Api.get(`/users/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }

      })

      setUser(response.data)

      if (response.data.userType === "empresa") {
        navigate("/dashboardempresas");
      }
      if (response.data.userType === "motoboy") {
        navigate("/dashboardmotoboy");
      }
    } catch (error) {
      console.log(error)
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    }
    finally{
      setLoad(false)
    }
  }
  if(token && id){
    autoLogin(setLoad)
  }else{
    setLoad(false)
    navigate('/')
  }


},[])


  const userLogin = async (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await Api.post("/login", formData);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
    
      if (response.data.user.userType === "empresa") {
        navigate("/dashboardempresas");
      }
      if (response.data.user.userType === "motoboy") {
        navigate("/dashboardmotoboy");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  const registerEmpresa = async (formData: IRegisterEmpresasFormData) => {
    try {
      const response = await Api.post("/users", formData);

      alert("Empresa Cadastrada");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const registerMotoboy = async (formData: IRegisterMotoboyFormData) => {
    try {
      const response = await Api.post("/users", formData);
      alert("Motoboy Cadastrado");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{ userLogin, logout, user, registerEmpresa, registerMotoboy,load}}
    >
      {children}
    </UserContext.Provider>
  );
};
