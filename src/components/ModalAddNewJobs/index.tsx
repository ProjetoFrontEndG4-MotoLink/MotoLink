import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react"
import { JobsContext } from "../../providers/JobsContext"

export interface IAddNewJob{
    local:string
    price:number
    
}
export const ModalAddNewJob=()=>{

const {register,handleSubmit}=useForm<IAddNewJob>({})
const {addNewJob,setOpenModalAddJob,openModalAddJob}=useContext(JobsContext)
const submit:SubmitHandler<IAddNewJob>=(formData)=>{
addNewJob(formData)
}



    return(
        <div role="dialog">
            <div>
                <h2>Nova entrega</h2>
                <button onClick={()=>setOpenModalAddJob(false)}>Fechar modal</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>

                <Input type="text" id="Endereço" label="Endereço" placeholder="Ex: Rua xxx xxx xx" {...register("local")}/>
                <Input  type="number" id="Valor" label="Taxa de Entrega" placeholder="Ex:R$:0,000,00" {...register("price")}/>
              
                <button> Cadastrar nova entrega</button>
            </form>

        </div>
    )
}