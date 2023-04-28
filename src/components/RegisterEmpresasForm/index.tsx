import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaEmpresas } from "./schema";

export interface IRegisterEmpresasFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  avatar: string;
  setor: string;
  userType: string;
}

export const RegisterFormEmpresas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterEmpresasFormData>({resolver:zodResolver(SchemaEmpresas)});

  const { registerEmpresa } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterEmpresasFormData> = (formData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        id={"Nome"}
        register={register("name")}
        error={errors.name}
      />
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

      <Input
        type="password"
        id={"Confirmar Senha"}
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <Input
        type="text"
        id={"Avatar"}
        register={register("avatar")}
        error={errors.avatar}
      />

      <Input
        type="text"
        id={"Setor"}
        register={register("setor")}
        error={errors.setor}
      />

      <input type="text" value="empresa" {...register("userType")} />

      <button>Cadastrar</button>
    </form>
  );
};
