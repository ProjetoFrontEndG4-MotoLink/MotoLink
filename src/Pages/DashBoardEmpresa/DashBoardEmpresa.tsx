import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const DashEmpresas=()=>{

    const{logout}=useContext(UserContext)

    return(

        <>
        <button onClick={logout}>Sair</button>
        <h1>Dash Empresas</h1>
        </>
    )
}