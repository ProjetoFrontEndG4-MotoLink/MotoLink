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
  } = useForm<IRegisterEmpresasFormData>({
    resolver: zodResolver(SchemaEmpresas),
  });

  const { registerEmpresa } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterEmpresasFormData> = (formData) => {
    registerEmpresa(formData);
    
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        id={"Nome"}
        {...register("name")}
        error={errors.name}
        placeholder="Digite seu nome aqui"
      />
      <Input
        label="E-mail"
        type="email"
        id={"E-mail"}
        {...register("email")}
        error={errors.email}
        placeholder="Ex.: email@teste.com"
      />

      <Input
        label="Senha"
        type="password"
        id={"Senha"}
        {...register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
      />

      <Input
        label="Confirmar senha"
        type="password"
        id={"Confirmar Senha"}
        {...register("confirmPassword")}
        error={errors.confirmPassword}
        placeholder="Confirme sua senha"
      />
      <Input
        label="Foto do perfil"
        type="text"
        id={"Avatar"}
        {...register("avatar")}
        error={errors.avatar}
        placeholder="Insira sua foto do perfil"
      />

      <Input
        label="Setor"
        type="text"
        id={"Setor"}
        {...register("setor")}
        error={errors.setor}
        placeholder="Ex: pizzaria"
      />

      <Input
        type="text"
        {...register("userType")}
        error={errors.userType}
        id={"userType"}
        value="empresa"
        
      />

      <button>Cadastrar</button>
    </form>
  );
};