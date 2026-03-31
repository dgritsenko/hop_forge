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
import { IRegistrationForm, registrationSchema } from "@/lib/validators"
import InputForm from "@/components/shared/InputForm/InputForm"
import RegistrationFormButtons from "./RegistrationFormButtons"

interface RegistrationForm{
    registration: ({}:IRegistrationForm)=>void,
}

export default function RegistrationForm({
    registration,
}:RegistrationForm){
    const {
        control, 
        handleSubmit,
        formState:{errors, isSubmitting}
    } = useForm<IRegistrationForm>({
        resolver: zodResolver(registrationSchema)
    });

    const registrationValidation = (formData: IRegistrationForm)=>{
        const validateResult = validateFormData(registrationSchema, formData)

        if(
            !validateResult.success
            || !validateResult.data?.name
            || !validateResult.data?.email
            || !validateResult.data?.phoneNumber
            || !validateResult.data?.birthDate
            || !validateResult.data?.password
        ) {
            return 0
        }
 
        registration(validateResult.data)

    }

    return(
        <form
            className="
                w-100 p-10 mt-50 rounded-4xl
                bg-stone-200
                justify-center items-center text-center    
            "
            onSubmit={handleSubmit(formData=>{registrationValidation(formData)})}
        >
            <InputForm
                control = {control}
                name = {'name'}
                type = {'text'}
                placeholder = {"Введите имя"}
                label = {'Имя'}
                error = {errors.name}

                className = {'text-lg'}
            />

            <InputForm
                control = {control}
                name = {'email'}
                type = {'email'}
                placeholder = {"example@example.su"}
                label = {'Email'}
                error = {errors.email}

                className = {'text-lg mt-10'}
            />


            <InputForm
                control = {control}
                name = {'phoneNumber'}
                type = {'text'}
                placeholder = {"+7(000)000 00 00"}
                label = {'Номер телефона'}
                error = {errors.phoneNumber}

                className = {'text-lg mt-10'}
            />

            <InputForm
                control = {control}
                name = {'birthDate'}
                type = {'date'}
                placeholder = {""}
                label = {'Дата рождение'}
                error = {errors.birthDate}

                className = {'text-lg mt-10'}
            />

            <InputForm
                control = {control}
                name = {'password'}
                type = {'password'}
                placeholder = {"Введите пароль"}
                label = {'Пароль'}
                error = {errors.password}

                className = {'text-lg mt-10'}
            />

            <RegistrationFormButtons/>

        </form>
    )
}