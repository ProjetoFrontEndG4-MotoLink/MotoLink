import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react"
import { JobsContext } from "../../providers/JobsContext"

import { ModalContainer } from "../../styles/global"
import { StyledModalAddNewJob } from "./style"
import { ButtonDefault } from "../../styles/buttons"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewJobSchema } from "./schema"

export interface IAddNewJob{
    local:string
    price:number
}

export const ModalAddNewJob = () => {
    const {register,handleSubmit, formState: {errors}}=useForm<IAddNewJob>({resolver: zodResolver(NewJobSchema)})
    const {addNewJob,setOpenModalAddJob,openModalAddJob}=useContext(JobsContext)
    const submit:SubmitHandler<IAddNewJob>=(formData)=>{
        addNewJob(formData)
    }

    return(
        <ModalContainer>
            <StyledModalAddNewJob role="dialog">
                <div className="buttons__container">
                    <h2>Nova entrega</h2>
                    <button onClick={()=>setOpenModalAddJob(false)}>x</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input type="text" id="Endereço" label="Endereço" placeholder="Ex: Rua xxx xxx xx" error={errors.local}{...register("local")}/>
                    <Input  type="number" id="Valor" label="Taxa de Entrega" placeholder="R$00,00" error={errors.price}{...register("price")}/>
                    <ButtonDefault 
                    type="submit"
                    className="fullWidth"
                    buttonSize="default"
                    buttonStyle="yellow"
                    > Cadastrar nova entrega</ButtonDefault>
                </form>
            </StyledModalAddNewJob>
        </ModalContainer>
    )
}