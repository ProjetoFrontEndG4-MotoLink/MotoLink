import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInputContainer } from "./style";

export interface IInputProps {
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({
  type,
  id,
  placeholder,
  register,
  error,
}: IInputProps) => {
  return (
    <StyledInputContainer>
      <label htmlFor={id}>{id}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      {error ? <p className="error">{error.message}</p> : null}
    </StyledInputContainer>
  );
};
