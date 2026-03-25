'use client'

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import Link from "next/link"
import LoginFormButtons from "./LoginFormButtons"
import validateFormData from "@/lib/validate/validateFormData"
import useAuth from "@/hooks/useAuth"
import { ILoginForm, loginSchema } from "@/lib/validators"

export default function LoginForm(){
    const {
        control, 
        handleSubmit,
        formState:{errors, isSubmitting}
    } = useForm<ILoginForm>({
        resolver: zodResolver(loginSchema)
    });

    const {
        login
    } = useAuth()

    const loginValidation = (formData: ILoginForm)=>{
        const validateResult = validateFormData(loginSchema, formData)

        if(!validateResult.success) {
            console.log('АСИБЬКА')
            return 0
        }
        if(!validateResult.data?.email) return 0
        if(!validateResult.data?.password) return 0
 
        login(validateResult.data)

        
    }

    return(
        <form
            className="
                w-100 p-10 mt-50 rounded-4xl
                bg-stone-200
                justify-center items-center text-center    
            "
            onSubmit={handleSubmit(formData=>{loginValidation(formData)})}
        >
            <Controller
                control={control}
                name="email"
                render={({field,fieldState})=>(
                    <Field
                        data-invalid={fieldState.invalid}
                    >
                        <FieldLabel
                            className='text-lg'
                        >
                            email
                        </FieldLabel>

                        <Input
                            {...field}
                            aria-invalid={fieldState.invalid}
                            placeholder="example@example.su"
                            type="email"
                        >

                        </Input>
                        <FieldError>
                            {errors.email?.message}
                        </FieldError>

                    </Field>
                )}
            />

            <Controller
                control={control}
                name="password"
                render={({field,fieldState})=>(
                    <Field
                        className='mt-10'
                        data-invalid={fieldState.invalid}
                    >
                        <FieldLabel
                            className='text-lg'
                        >
                            Пароль
                        </FieldLabel>

                        <Input
                            {...field}
                            aria-invalid={fieldState.invalid}
                            placeholder="Введите пароль"
                            type="password"
                        >

                        </Input>
                        <FieldError>
                            {errors.password?.message}
                        </FieldError>

                    </Field>
                )}
            />
            <LoginFormButtons/>

        </form>
    )
}