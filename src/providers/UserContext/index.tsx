import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../../Pages/Login/LoginForm";
import { Api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { IRegisterMotoboyFormData } from "../../Pages/Register/RegisterFormMotoboy";
import { IRegisterEmpresasFormData } from "../../Pages/Register/RegisterEmpresasForm";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IupdateEmpresas } from "../../Pages/DashBoardEmpresa/UpdateModalEmpresas";

interface IUserProvider {
  children: React.ReactNode;
}
interface IUserContext {
  userLogin: (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  logout: () => void;
  editProfile: (formData: IupdateEmpresas) => void;
  user: IUser | null;
  registerEmpresa: (FormData: IRegisterEmpresasFormData) => void;
  registerMotoboy: (FormData: IRegisterMotoboyFormData) => void;
  load: boolean;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  telefone: string;
  setor: string;
}

interface APIError {
  message: string;
  status: number;
  data?: any;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [load, setLoad] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const autoLogin = async (
      setLoad: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      try {
        const response = await Api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);

        if (response.data.userType === "empresa") {
          navigate("/dashboardempresas");
        }
        if (response.data.userType === "motoboy") {
          navigate("/dashboardemotoboy");
        }
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setLoad(false);
      }
    };

    if (token && id) {
      autoLogin(setLoad);
    } else {
      setLoad(false);
      navigate("/");
    }
  }, []);

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
    } catch (error: AxiosError<APIError> | any) {
      console.log(error.response?.data)
      toast.error("Ops... Algo deu errado, tente novamente!")
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

  const editProfile = async (formData: IupdateEmpresas) => {
    const id = localStorage.getItem("@USERID");
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await Api.patch(`/users/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      toast.success("Perfil atualizado com sucesso!")
    } catch (error) {
      toast.error("Ops... Algo deu errado, tente novamente!")

    } finally {
      setOpenModal(false);
    }
  };

  const registerEmpresa = async (formData: IRegisterEmpresasFormData) => {
    try {
      setLoad(true);
      await Api.post("/users", formData);
      toast.success("Empresa cadastrada com sucesso!")
      navigate("/");
    } catch (error: AxiosError<APIError> | any) {
      console.log(error.response?.data);
    } finally {
      setLoad(false);
    }
  };

  const registerMotoboy = async (formData: IRegisterMotoboyFormData) => {
    try {
      setLoad(true);
      await Api.post("/users", formData);
      toast.success("Usuário cadastrado com sucesso!")
      navigate("/");
    } catch (error: AxiosError<APIError> | any) {
      console.log(error.response?.data);
    } finally {
      setLoad(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        userLogin,
        logout,
        user,
        registerEmpresa,
        registerMotoboy,
        load,
        editProfile,
        setOpenModal,
        openModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
