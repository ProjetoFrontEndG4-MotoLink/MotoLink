import { Routes,Route} from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { Register } from "../Pages/Register/Register"
import { DashEmpresas } from "../Pages/DashBoardEmpresa/DashBoardEmprea"
import { DashMotoboy } from "../Pages/DashboardMotoboy/DashBoardMotoboy"
import { ProtectedDashMotoboy } from "../components/ProtectedRoutes/dashMotoboy"
import { ProtectedDashEmpresas } from "../components/ProtectedRoutes/dashEmpresas"

export const RounterMain=()=>{

    return(

        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboardempresas" element={<ProtectedDashEmpresas/>}>
                <Route   index element={<DashEmpresas/>}/>
            </Route>

            <Route  path="/dashboardmotoboy" element={<ProtectedDashMotoboy/>}>
                <Route index element={<DashMotoboy/>}/>
            </Route>
        </Routes>
    )
}