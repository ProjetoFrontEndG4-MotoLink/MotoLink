import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom"
import { StyledLoginPage } from "./style"
import logo from "../../assets/images/logo-black.svg"


export const Login = () => {

    return(
        <>
            <StyledLoginPage>
                <header className="header__login">
                    <img src={logo} className="logo__motoLink"/>
                </header>
                
                <div className="padding__default"> {/* Aplica um padding de 20px dentro de todo component, menos no header (Somente celular)*/}
                    <LoginForm/>
                    <Link to="/register">Cadastre-se</Link>

                </div>

            </StyledLoginPage>
        </>
    )

}