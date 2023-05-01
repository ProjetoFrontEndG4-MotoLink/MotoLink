import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react"
import { JobsContext } from "../../providers/JobsContext"

export interface IUpJob{
    local:string
    price:number
    
}
export const ModalUpJob=()=>{

const {register,handleSubmit}=useForm<IUpJob>({})
const { setOpenModalUpJob,updateJob}=useContext(JobsContext)
const submit:SubmitHandler<IUpJob>=(formData)=>{



updateJob(formData)
}



    return(
        <div role="dialog">
            <div>
                <h2>Atualiza entrega</h2>
                <button onClick={()=> setOpenModalUpJob(false)}>Fechar modal</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>

                <Input type="text" id="Endereço" label="Endereço" placeholder="Ex: Rua xxx xxx xx" {...register("local")}/>
                <Input  type="number" id="Valor" label="Taxa de Entrega" placeholder="Ex:R$:0,000,00" {...register("price")}/>
              
                <button> Editar entrega</button>
            </form>

        </div>
    )
}