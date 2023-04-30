import { useContext} from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet,} from "react-router-dom"

export const ProtectedDashEmpresas=()=>{
    const {user,load}=useContext(UserContext)

if(load){
    return <div>Carregando...</div>
}


    return  user? <Outlet/> : <Navigate to={"/"}/>
}