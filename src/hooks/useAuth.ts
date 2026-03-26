'use client'

import { ILoginForm, IRegistrationForm } from "@/lib/validators"
import { redirect } from 'next/navigation'
import axios from "axios"
import { useState } from "react"

export const API_AUTH = 'https:/SERVER/api/auth' 

export default function useAuth(){

    const [
        registrationStage,
        setRegistrationStage
    ] = useState('')

    const login = async({email,password}:ILoginForm)=>{
        try{

            const response = await axios.post(`${API_AUTH}/login`,{
                email,
                password
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

            const response = await axios.post(`${API_AUTH}/login`,{
                email,
                password
            })


        }catch(error){
            console.log(error)
            throw error
        }
        
    }


    const emailVeryfi = async({email,password}:ILoginForm)=>{
        try{

            const response = await axios.post(`${API_AUTH}/login`,{
                email,
                password
            })


        }catch(error){
            console.log(error)
            throw error
        }
        
    }

    return {
        login,
        registration,
        emailVeryfi,

        registrationStage,
    }
}