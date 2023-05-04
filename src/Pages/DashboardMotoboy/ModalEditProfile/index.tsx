import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalContainer } from "../../../styles/Modal";
import closeIcon from "../../../assets/images/icon-close.svg";
import { ButtonDefault } from "../../../styles/buttons";
import { UpdateMotoboy } from "./schema";

export interface IupdateMotoboy {
  name: string;
  email: string;
  setor: string;
  telefone: string;
  CNH: number;
  plate: string;
}
export const UpdateModalMotoboy = () => {
  const { setOpenModalMoto, editProfileMotoboy } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IupdateMotoboy>({ resolver: zodResolver(UpdateMotoboy) });

  const{user}=useContext(UserContext)
  const submit: SubmitHandler<IupdateMotoboy> = (formData) => {
    editProfileMotoboy(formData);

  };
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
            label="Telefone"
            type="number"
            id={"Telefone"}
            {...register("telefone")}
            placeholder="Ex: (00) 00000-0000"
            error={errors.telefone}
          />
          <Input
            label="CNH"
            type="number"
            id={"CNH"}
            {...register("CNH")}
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
          <ButtonDefault buttonSize="default" buttonStyle="yellow">
            Editar Perfil
          </ButtonDefault>
        </form>
      </div>
    </ModalContainer>
  );
};
