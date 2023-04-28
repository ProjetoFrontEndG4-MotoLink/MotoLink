import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedDashEmpresas=()=>{
    const {user}=useContext(UserContext)

    return user && user.userType =="empresas"?  <Outlet/> : <Navigate to={"/"}/>
}