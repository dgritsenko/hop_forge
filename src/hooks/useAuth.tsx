import axios from "axios"

export default function useAuth(){
    const API_AUTH = 'https:/SERVER/api/auth' 

    const login = async(formData: FormData)=>{
        try{

            const response = axios.post(`API_AUTH/login`,[
                formData.get('email'),
                formData.get('password')
            ])

            if((await response).status.){

            }

        }catch(error){
            console.log(error)
        }

    }
    return {

    }
}