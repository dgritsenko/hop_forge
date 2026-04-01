'use client'

import { IEmailAuthForm, ILoginForm, IRegistrationForm } from "@/lib/validators"
import { redirect } from 'next/navigation'
import axios from "axios"
import { useState } from "react"
import { success } from "zod"
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const API_AUTH = 'https:/SERVER/api/auth' 

export default function useAuth(){

    const [
        registrationStage,
        setRegistrationStage
    ] = useState<'registration'|'emailAuth'>('registration')

    const [
        emailVerificationStatus,
        setEmailVerificationStatus
    ] = useState <'success'|'invalid'|'expired'|null>(null)

    const login = async({email,password}:ILoginForm)=>{
        try{

            const response = await axios.post(`${API_AUTH}/login`,{
                email, password
            })

            redirect('/profile')

        }catch(error){
            console.log(error)
            throw error
        }
        
    }

    const registration = async({
        name, email, phoneNumber, birthDate, password,
    }:IRegistrationForm)=>{
        try{


            const birthDateString = format(birthDate, 'dd, MM, yyyy', { locale: ru });

            const response = await axios.post(`${API_AUTH}/registration`,{
                name, email, phoneNumber, birthDateString, password
            })

            setRegistrationStage('emailAuth')

        }catch(error){
            console.log(error)
            throw error
        }
        
    }


    const emailVerify = async(authCode:number)=>{
        try{

            const response = await axios.post(`${API_AUTH}/emailVerify`,{
                authCode
            })

            setEmailVerificationStatus(response.data.emailVerificationStatus)

            if(response.data.emailVerificationStatus == 'success'){
                setRegistrationStage('registration')
                redirect('/profile')
            }
            
        }catch(error){
            console.log(error)
            throw error
        }
        
    }

    return {
        login,
        registration,
        emailVerify,

        registrationStage,
        emailVerificationStatus,
    }
}