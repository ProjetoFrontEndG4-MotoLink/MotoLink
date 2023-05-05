import { FieldError } from "react-hook-form";
import { StyledInputContainer } from "./style";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  className?: string;
}

export const Input = forwardRef(
  (
    { label, error,value,  ...rest}: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <StyledInputContainer>
      {label ? <label>{label}</label> : null}
      <input ref={ref} {...rest} value={value}/>
      {error ? <p className="error">{error.message}</p> : null}

    </StyledInputContainer>
  )
);
