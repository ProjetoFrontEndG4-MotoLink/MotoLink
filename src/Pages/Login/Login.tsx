import { LoginForm } from "../../components/LoginForm";
import { Link } from "react-router-dom";
import { StyledLoginPage } from "./style";
import logo from "../../assets/images/logo-black.svg";
import bgRegister from "../../assets/images/background-register.svg";
import { ButtonDefault } from "../../styles/buttons";

export const Login = () => {
  return (
    <>
      <StyledLoginPage>
        <header className="header__login">
          <img src={logo} className="logo__motoLink" />
        </header>
        <div className="column1">
          <div className="detail"></div>
          <img src={logo} alt="logo motolink" />

          <img src={bgRegister} alt="" />
          <h1>Sua nova parceria está em rota de entrega. Cadastre-se agora!</h1>
          <p className="textDefault">
            A motolink conecta as melhores empresas aos motoboys mais rápidos do
            mercado
          </p>
        </div>
        <div className="column2 padding__default">
          {" "}
          {/* Aplica um padding de 20px dentro de todo component, menos no header (Somente celular)*/}
          <div className="formContainer">
            <LoginForm />
            <ButtonDefault
              className="fullWidth"
              buttonSize="default"
              buttonStyle="orange"
            >
              <Link to="/register">Cadastre-se</Link>
            </ButtonDefault>
          </div>
        </div>
      </StyledLoginPage>
    </>
  );
};
