'use client'

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import Link from "next/link"
import LoginFormButtons from "./RegistrationFormButtons"
import validateFormData from "@/lib/validate/validateFormData"
import { emailAuthSchema, IEmailAuthForm, IRegistrationForm, registrationSchema } from "@/lib/validators"
import InputForm from "../InputForm"
import RegistrationFormButtons from "./RegistrationFormButtons"

interface EmailAuthForm{
    emailVerify: (authCode:number)=>void
    emailVerificationStatus: 'success'|'invalid'|'expired'|null
}

export default function EmailAuthForm({
    emailVerify
}:EmailAuthForm){
    
    const {
        control, 
        handleSubmit,
        formState:{errors, isSubmitting}
    } = useForm<IEmailAuthForm>({
        resolver: zodResolver(emailAuthSchema)
    });

    const emailAuthValidation = (formData: IEmailAuthForm)=>{
        const validateResult = validateFormData(emailAuthSchema, formData)

        if(!validateResult.success || !validateResult.data?.authCode) {
            return 0
        }
 
        emailVerify(validateResult.data.authCode)

        
    }
    
    
    return (
        <form
            className="
                w-100 p-10 mt-50 rounded-4xl
                bg-stone-200
                justify-center items-center text-center    
            "
            onSubmit={handleSubmit(formData=>{emailAuthValidation(formData)})}
        >
            <InputForm
                control = {control}
                name = {'authCode'}
                type = {'number'}
                placeholder = {"Введите код подтверждения"}
                label = {'Подтверждение почты'}
                error = {errors.authCode}

                className = {'text-lg'}
                

            />

            <RegistrationFormButtons/>

        </form>
    )
}