import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaMotoboy } from "./schema";
import { StyledForm } from "../LoginForm/style";
import { ButtonDefault } from "../../styles/buttons";

export interface IRegisterMotoboyFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  avatar: string;
  CNH: string;
  userType: string;
  plate: string;
  telefone: number;
}

export const RegisterFormMotoboy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterMotoboyFormData>({
    resolver: zodResolver(SchemaMotoboy),
  });
  const { registerMotoboy, loading } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterMotoboyFormData> = (formData) => {
    registerMotoboy(formData);
  };
  return (
    <StyledForm>
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="text"
          id={"Nome"}
          {...register("name")}
          error={errors.name}
          placeholder="Digite seu nome"
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
          label="Telefone"
          type="number"
          id={"Telefone"}
          {...register("telefone")}
          error={errors.telefone}
          placeholder="Ex.: (00) 00000-0000"
        />
        <Input
          label="Senha"
          type="password"
          id={"Senha"}
          {...register("password")}
          error={errors.password}
          placeholder="Digite uma senha"
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
          label="CNH"
          type="text"
          id={"CNH"}
          {...register("CNH")}
          error={errors.CNH}
          placeholder="Ex:111222333"
        />

        <Input
          label="Placa"
          type="text"
          id={"Placa da moto"}
          {...register("plate")}
          error={errors.plate}
          placeholder="Ex:111W3J3"
        />

        <Input
          type="text"
          value="motoboy"
          {...register("userType")}
          error={errors.userType}
          className="disabled"
        />
        <ButtonDefault
          className="fullWidth"
          buttonSize="default"
          buttonStyle="grey"
        >
          {loading ? "Entrando..." : "Fazer cadastro"}
        </ButtonDefault>
      </form>
    </StyledForm>
  );
};
