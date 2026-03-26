import useAuth from "@/hooks/useAuth";
import RegistrationForm from "./RegistrationForm";

export default function Registration(){
    
    const {
        registration
    } = useAuth()
    
    return (
        <div
        
        >
            <RegistrationForm
                registration={registration}
            />
        </div>
    )
}