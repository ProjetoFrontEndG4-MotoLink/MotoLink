import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./loginSchema";
import { StyledFormLogin } from "./style";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({resolver:zodResolver(LoginSchema)});

  const {userLogin}=useContext(UserContext)

  const [loading, setLoading] = useState(false);

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    userLogin(formData,setLoading);
  };
  return (
    <>
      <StyledFormLogin>
        <h3>Login</h3>

        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="email"
            id={"E-mail"}
            register={register("email")}
            error={errors.email}
          />

          <Input
            type="password"
            id={"Senha"}
            register={register("password")}
            error={errors.password}
          />

          <button disabled={loading} > {loading ? "Entrando..." : "Entrar"}</button>
        </form>
      </StyledFormLogin>
    </>
  );
};
