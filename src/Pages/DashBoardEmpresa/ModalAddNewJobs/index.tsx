import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { useContext } from "react";
import { JobsContext } from "../../../providers/JobsContext";
import { ButtonDefault } from "../../../styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewJobSchema } from "./schema";
import { ModalContainer } from "../../../styles/Modal";
import closeIcon from "../../../assets/images/icon-close.svg";

export interface IAddNewJob {
  local: string;
  price: number;
}

export const ModalAddNewJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewJob>({ resolver: zodResolver(NewJobSchema) });
  const { addNewJob, setOpenModalAddJob } = useContext(JobsContext);
  const submit: SubmitHandler<IAddNewJob> = (formData) => {
    addNewJob(formData);
  };

  return (
    <ModalContainer>
      <div className="modalBody">
        <div className="modal__header">
          <h2>Adicionar nova entrega</h2>
          <img src={closeIcon} onClick={() => setOpenModalAddJob(false)} />
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            id="Endereço"
            label="Endereço"
            placeholder="Ex: Rua xxx xxx xx"
            error={errors.local}
            {...register("local")}
          />
          <Input
            type="number"
            id="Valor"
            label="Taxa de Entrega"
            placeholder="R$00,00"
            error={errors.price}
            {...register("price")}
          />
          <ButtonDefault
            type="submit"
            className="fullWidth"
            buttonSize="default"
            buttonStyle="yellow"
          >
            {" "}
            Cadastrar nova entrega
          </ButtonDefault>
        </form>
      </div>
    </ModalContainer>
  );
};
