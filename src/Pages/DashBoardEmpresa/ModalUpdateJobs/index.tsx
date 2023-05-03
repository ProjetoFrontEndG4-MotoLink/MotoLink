import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useContext } from "react";
import { JobsContext } from "../../../providers/JobsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateJobSchema } from "./schema";
import { ModalContainer } from "../../../styles/Modal";
import closeIcon from "../../../assets/images/icon-close.svg";
import { ButtonDefault } from "../../../styles/buttons";

export interface IUpJob {
  local: string;
  price: number;
}
export const ModalUpJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpJob>({ resolver: zodResolver(UpdateJobSchema) });
  const { setOpenModalUpJob, updateJob } = useContext(JobsContext);
  const submit: SubmitHandler<IUpJob> = (formData) => {
    updateJob(formData);
  };

  return (
    <ModalContainer>
      <div className="modalBody">
        <div className="modal__header">
          <h2>Editar entrega</h2>
          <img src={closeIcon} onClick={() => setOpenModalUpJob(false)} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            id="Endereço"
            label="Endereço"
            placeholder="Ex: Rua xxx xxx xx"
            {...register("local")}
            error={errors.local}
          />
          <Input
            type="number"
            id="Valor"
            label="Taxa de Entrega"
            placeholder="R$00,00"
            {...register("price")}
            error={errors.price}
          />

          <ButtonDefault buttonSize="default" buttonStyle="yellow">
            {" "}
            Editar entrega
          </ButtonDefault>
        </form>
      </div>
    </ModalContainer>
  );
};
