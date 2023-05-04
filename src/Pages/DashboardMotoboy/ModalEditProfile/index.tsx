import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContainer } from "../../../styles/Modal";
import closeIcon from "../../../assets/images/icon-close.svg";
import { ButtonDefault } from "../../../styles/buttons";
import { UpdateMotoboy } from "./schema";

export interface IupdateMotoboy {
  name: string;
  email: string;
  telefone: string;
  CNH: string;
  plate: string;
}

export const UpdateModalMotoboy = () => {
  const { setOpenModalMoto, editProfileMotoboy, user } =
    useContext(UserContext);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IupdateMotoboy>({ resolver: zodResolver(UpdateMotoboy) });

  const submit: SubmitHandler<IupdateMotoboy> = (formData) => {
    console.log(formData);
    editProfileMotoboy(formData);
  };

  useEffect(() => {
    setValue("name", user?.name || "");
    setValue("email", user?.email || "");
    setValue("telefone", user?.telefone || "");
    setValue("CNH", user?.CNH || "");
    setValue("plate", user?.plate || "");
  }, [setValue, user]);

  return (
    <ModalContainer>
      <div className="modalBody">
        <div className="modal__header">
          <h2>Editar perfil</h2>
          <img src={closeIcon} onClick={() => setOpenModalMoto(false)} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            id={"Nome"}
            {...register("name")}
            placeholder="Ex: João da Silva"
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            id={"Email"}
            {...register("email")}
            error={errors.name}
            readOnly
          />
          <Input
            label="Telefone"
            type="number"
            id={"Telefone"}
            {...register("telefone")}
            placeholder="Ex: (00) 00000-0000"
            error={errors.telefone}
          />
          <Input
            label="CNH"
            type="string"
            id={"CNH"}
            {...register("CNH")}
            placeholder="Ex: ABC12345678"
            error={errors.CNH}
          />
          <Input
            label="Placa"
            type="text"
            id={"placa"}
            {...register("plate")}
            placeholder="Ex: 333ee77"
            error={errors.plate}
          />
          <ButtonDefault
            buttonSize="default"
            buttonStyle="yellow"
            type="submit"
          >
            Editar Perfil
          </ButtonDefault>
        </form>
      </div>
    </ModalContainer>
  );
};
