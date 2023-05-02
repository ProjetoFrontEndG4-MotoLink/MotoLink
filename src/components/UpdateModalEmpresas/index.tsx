import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateEmpresas } from "./schema"

export interface IupdateEmpresas{
    name:string,
    email:string,
    setor:string,
    telefone:string
}
export const UpdateModalEmpresas=()=>{

    const{editProfile,setOpenModal}=useContext(UserContext)
    
    const{register,handleSubmit,formState:{errors}}=useForm<IupdateEmpresas>({resolver:zodResolver(UpdateEmpresas)})


    const submit:SubmitHandler<IupdateEmpresas>=(formData)=>{
        editProfile(formData)
    }
    return(
        

        <div role="dialog">
            <h2>Editar perfil</h2>
            <button onClick={()=>setOpenModal(false)}>Fechar Modal</button>

            <form onSubmit={handleSubmit(submit)}>

            <Input
          label="Nome"
          type="text"
          id={"Nome"}
          {...register("name")}
          placeholder="Ex:João da Silva"
          error={errors.name}
          
        />
              <Input
          label="E-mail"
          type="email"
          id={"E-mail"}
          {...register("email")}
          placeholder="Ex.: email@teste.com"
          error={errors.email}
        />

<Input
          label="Telefone"
          type="number"
          id={"Telefone"}
          {...register("telefone")}
         
          placeholder="Ex.: (00) 00000-0000"
          error={errors.telefone}
        />
           <Input
          label="Setor"
          type="text"
          id={"Setor"}
          {...register("setor")}
         
          placeholder="Ex: pizzaria"
          error={errors.setor}
        />

        <button>Editar Perfil</button>
            </form>
          
        </div>
    )
}