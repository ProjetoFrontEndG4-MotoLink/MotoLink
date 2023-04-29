import { Link } from "react-router-dom";
import { RegisterFormEmpresas } from "../../components/RegisterEmpresasForm";
import { useState } from "react";
import { RegisterFormMotoboy } from "../../components/RegisterFormMotoboy";

export const Register = () => {
  const [formEmpresas, setFormEmpresas] = useState(false);
  const [formMotoboy, setFormMotoboy] = useState(false);

  return (
    <>
      {!formMotoboy && !formEmpresas ? (
        <div>
          <h1>Com que objetivo você quer entrar na MotoLink?</h1>
          <button onClick={() => setFormMotoboy(!formMotoboy)}>
            Sou motoboy
          </button>
          <button onClick={() => setFormEmpresas(!formEmpresas)}>
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
