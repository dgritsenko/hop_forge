import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export interface InputFormInterface<T extends FieldValues>{
    control:Control<T>,
    name:Path<T>,
    type:string,
    placeholder?:string,
    label:string,
    error?: FieldError,
    className?: string
}