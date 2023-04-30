import { Link } from "react-router-dom";
import { RegisterFormEmpresas } from "../../components/RegisterEmpresasForm";
import { useState } from "react";
import { RegisterFormMotoboy } from "../../components/RegisterFormMotoboy";
import { IndexDefaultTemplate } from "../../components/IndexDefaultTemplate/IndexDefaultTemplate.tsx";
import { CardTypeOfUser } from "../../components/CardTypeOfUser/index.tsx";
import iconMotoboy from "../../assets/images/icon-motoboy.svg";
import iconCompany from "../../assets/images/icon-company.svg";

export const Register = () => {
  const [formEmpresas, setFormEmpresas] = useState(false);
  const [formMotoboy, setFormMotoboy] = useState(false);

  const renderMotoboyForm = () => {
    setFormMotoboy(!formMotoboy);
  };

  const renderCompanyForm = () => {
    setFormEmpresas(!formEmpresas);
  };

  return (
    <IndexDefaultTemplate>
      {!formMotoboy && !formEmpresas ? (
        <div className="optionsContainer">
          <p className="titleOptionsContainer">
            Com que objetivo você quer entrar na <span>MotoLink</span>?
          </p>
          <div className="optionsCard__container">
            <CardTypeOfUser callback={renderMotoboyForm} img={iconMotoboy}>
              Sou motoboy
            </CardTypeOfUser>
            <CardTypeOfUser callback={renderCompanyForm} img={iconCompany}>
              Sou uma empresa delivery
            </CardTypeOfUser>
          </div>
        </div>
      ) : null}

      {formMotoboy ? (
        <>
          <RegisterFormMotoboy />
          <p className="textSmall">
            Possui uma conta?{" "}
            <Link className="textSmallBold" to="/">
              Voltar para o Login
            </Link>
          </p>
        </>
      ) : null}

      {formEmpresas ? (
        <>
          <RegisterFormEmpresas />
          <p className="textSmall">
            Possui uma conta?{" "}
            <Link className="textSmallBold" to="/">
              Voltar para o Login
            </Link>
          </p>
        </>
      ) : null}
    </IndexDefaultTemplate>
  );
};
