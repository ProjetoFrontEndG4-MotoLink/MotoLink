import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedDashMotoboy=()=>{
    const {user}=useContext(UserContext)

    return user && user.userType =="motoboy"?  <Outlet/> : <Navigate to={"/"}/>
}