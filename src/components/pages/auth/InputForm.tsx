import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Control, Controller, ControllerFieldState, ControllerRenderProps, FieldValues } from "react-hook-form";
import { InputFormInterface } from "./InputFormInterface";



export default function InputForm<T extends FieldValues>({
    control,
    name,
    type,
    placeholder,
    label,
    error,
    className,
    ...props

}:InputFormInterface<T>){
    return(
        <Controller
            control={control}
            name={name}
            render={({field,fieldState})=>(
                <Field
                    data-invalid={fieldState.invalid}
                >
                    <FieldLabel
                        className={className}
                    >
                        {label}
                    </FieldLabel>

                    <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder={placeholder}
                        type={type}
                        {...props}
                    >

                    </Input>
                    <FieldError>
                        {error?.message}
                    </FieldError>

                </Field>
            )}
        />       
    )
}