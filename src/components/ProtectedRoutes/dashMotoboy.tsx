import { useContext, useEffect } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet, useNavigate } from "react-router-dom"

export const ProtectedDashMotoboy=()=>{
    const {user}=useContext(UserContext)

    const navigate= useNavigate()



    return  user? <Outlet/> : <Navigate to={"/"}/>
}