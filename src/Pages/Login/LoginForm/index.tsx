import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./loginSchema";
import { StyledForm } from "./style";
import { ButtonDefault } from "../../../styles/buttons";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: zodResolver(LoginSchema) });

  const { userLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData, setLoading);
  };
  return (
    <>
      <StyledForm>
        <h3>Login</h3>

        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="E-mail"
            type="email"
            id={"E-mail"}
            placeholder="Ex.: email@teste.com"
            {...register("email")}
            error={errors.email}
          />

          <Input
            label="Senha"
            type="password"
            id={"Senha"}
            placeholder="Digite sua senha"
            {...register("password")}
            error={errors.password}
          />
          <ButtonDefault
            className="fullWidth"
            buttonSize="default"
            buttonStyle="grey"
          >
            {loading ? "Entrando..." : "Entrar"}
          </ButtonDefault>
        </form>
      </StyledForm>
    </>
  );
};
