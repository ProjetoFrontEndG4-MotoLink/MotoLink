import { Link } from "react-router-dom";
import { RegisterFormEmpresas } from "../../components/RegisterEmpresasForm";
import { useState } from "react";
import { RegisterFormMotoboy } from "../../components/RegisterFormMotoboy";

export const Register = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [formEmpresas, setFormEmpresas] = useState(false);
  const [formMotoboy, setFormMotoboy] = useState(false);

  const backToLogin = () => {
    setFirstStep(!firstStep);
    setFormMotoboy(false);
    setFormEmpresas(false);
  };

  const openMotoboyForm = () => {
    setFirstStep(!firstStep);
    setFormMotoboy(!formMotoboy);
  };

  const openCompanyForm = () => {
    setFirstStep(!firstStep);
    setFormEmpresas(!formEmpresas);
  };

  return (
    <>
    <h1>Com que objetivo você quer entrar na MotoLink?</h1>
      {firstStep ? (
        <div>
          
          <button onClick={() => openMotoboyForm()}>Sou motoboy</button>
          <button onClick={() => openCompanyForm()}>
            Sou uma empresa delivery
          </button>
        </div>
      ) : null}

      {formMotoboy ? (
        <>
          <RegisterFormMotoboy />
          <Link to="/">Voltar para Login</Link>
        </>
      ) : null}

      {formEmpresas ? (
        <>
          <RegisterFormEmpresas />
          <Link to="/">Voltar para Login</Link>
        </>
      ) : null}
    </>
  );
};
