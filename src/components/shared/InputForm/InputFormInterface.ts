import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export interface InputFormInterface<T extends FieldValues>{
    control:Control<T>,
    name:Path<T>,
    type:string,
    label:string,

    placeholder?:string,
    error?: FieldError,
    className?: string

    customFormatted?:boolean,
    formatHandler?:(inputValue: string) => string;
}