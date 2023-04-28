import { Link } from "react-router-dom";
import { RegisterFormEmpresas } from "../../components/RegisterEmpresasForm";
import { useState } from "react";
import { RegisterFormMotoboy } from "../../components/RegisterFormMotoboy";

export const Register = () => {
  const [formEmpresas, setFormEmpresas] = useState(false);
  const [formMotoboy, setFormMotoboy] = useState(false);

  return (
    <>
      <h1>Register</h1>
      <Link to="/"> Voltar para o login</Link>

      {formEmpresas ? (
        <RegisterFormEmpresas />
      ) : (
        <button onClick={() => setFormEmpresas(true)}>Empresa</button>
      )}
      

      {formMotoboy ? (
        <RegisterFormMotoboy />
      ) : (
        <button onClick={() => setFormMotoboy(true)}>Motoboy</button>
      )}
    </>
  );
};
