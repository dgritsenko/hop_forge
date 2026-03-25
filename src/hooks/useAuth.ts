import { ILoginForm } from "@/lib/validators"
import axios from "axios"

export default function useAuth(){
    const API_AUTH = 'https:/SERVER/api/auth' 

    const login = async({email,password}:ILoginForm)=>{
        try{

            console.log(
                email,
                ' и ',
                password
            )

            // const response = axios.post(`API_AUTH/login`,[
            //     email,
            //     password
            // ])

            // if((await response).status.){

            // }

        }catch(error){
            console.log(error)
        }

    }

    return {
        login,
    }
}