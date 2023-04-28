import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom"
export const Login=()=>{

    return(
<>
<Link to="/register">Cadastre-se</Link>


<LoginForm/>


</>
)

}