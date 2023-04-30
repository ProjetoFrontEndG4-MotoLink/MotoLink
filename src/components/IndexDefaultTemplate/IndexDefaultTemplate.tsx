import React from "react";
import { StyledLoginPage } from "../IndexDefaultTemplate/IndexDefaultTemplate";
import logo from "../../assets/images/logo-black.svg";
import bgRegister from "../../assets/images/background-register.svg";

type IndexTemplateProps = {
  children: React.ReactNode;
};

export const IndexDefaultTemplate = ({ children }: IndexTemplateProps) => {
  return (
    <StyledLoginPage>
      <header className="header__login">
        <div>
          <img src={logo} alt="logo MotoLink" />
        </div>
      </header>
      <div className="column1">
        <div className="column1__Content">
          <div className="detail"></div>
          <img className="logo__column1" src={logo} alt="logo motolink" />
          <img
            src={bgRegister}
            alt="Motoboy de máscara sanitária entregando encomenda para cliente"
          />
          <h1>Sua nova parceria está em rota de entrega. Cadastre-se agora!</h1>
          <p className="textDefault">
            A motolink conecta as melhores empresas aos motoboys mais rápidos do
            mercado
          </p>
        </div>
      </div>
      <div className="column2 padding__default">
        <div className="formContainer">{children}</div>
      </div>
    </StyledLoginPage>
  );
};
