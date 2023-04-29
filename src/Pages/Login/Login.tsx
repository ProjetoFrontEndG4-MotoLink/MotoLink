import { LoginForm } from "../../components/LoginForm";
import { IndexDefaultTemplate } from "../../components/IndexDefaultTemplate/IndexDefaultTemplate.tsx";
import { ButtonDefault } from "../../styles/buttons.tsx";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <IndexDefaultTemplate>
      <LoginForm />
      <div className="registerRedirect__Container">
        <div>
          <p className="textDefaultBold">Não tem conta?</p>
          <p className="textDefault">Faça o seu cadastro</p>
        </div>
        <Link to="/register">
          <ButtonDefault
            type="button"
            className="fullWidth"
            buttonSize="default"
            buttonStyle="orange"
          >
            Cadastre-se
          </ButtonDefault>
        </Link>
      </div>
    </IndexDefaultTemplate>
  );
};
