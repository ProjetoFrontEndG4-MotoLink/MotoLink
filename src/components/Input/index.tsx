import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
    type: string;
    id: string;
    register: UseFormRegisterReturn<string>;
    error?: FieldError,
   
  }
export const Input=({ type, id, register, error}:IInputProps)=>{

    return(
        <div>
               <label htmlFor={id}>{id}</label>
            <input type={type} id={id} placeholder=" " {...register} />
            {error ? (<p>{error.message}</p>) : null}

        </div>
    )
}
