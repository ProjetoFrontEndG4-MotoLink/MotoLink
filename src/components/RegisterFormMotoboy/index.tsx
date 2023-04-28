import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaMotoboy } from "./schema";

export interface IRegisterMotoboyFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  avatar: string;
  CNH: string;
  userType: string;
  plate: string;
}

export const RegisterFormMotoboy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterMotoboyFormData>({resolver:zodResolver(SchemaMotoboy)});

  const { registerMotoboy } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterMotoboyFormData> = (formData) => {
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
        id={"CNH"}
        register={register("CNH")}
        error={errors.CNH}
      />

      <Input
        type="text"
        id={"Placa da moto"}
        register={register("plate")}
        error={errors.plate}
      />

      <input type="text" value="motoboy" {...register("userType")} />

      <button>Cadastrar</button>
    </form>
  );
};
