import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const DashMotoboy=()=>{
const {logout}=useContext(UserContext)
    return(

        <>
        <button onClick={logout}>Sair</button>
        <h1>Dash Motoboy</h1>
        
        </>
    )
}