import { Routes,Route} from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { Register } from "../Pages/Register/Register"
import { DashEmpresas } from "../Pages/DashBoardEmpresa/DashBoardEmprea"
import { DashMotoboy } from "../Pages/DashboardMotoboy/DashBoardMotoboy"

export const RounterMain=()=>{

    return(

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboardempresas" element={<DashEmpresas/>}/>
            <Route path="/dashboardmotoboy" element={<DashMotoboy/>}/>
        </Routes>
    )
}