'use client'

import useAuth from "@/hooks/useAuth";
import RegistrationForm from "./RegistrationForm";
import EmailAuthForm from "./EmailAuthForm";

export default function Registration(){
    
    const {
        registration,
        emailVeryfi,

        registrationStage,
        emailVerificationStatus
    } = useAuth()
    
    return (
        <div
            className="
                flex justify-center items-center text-center
            "
        >
            {
                registrationStage == 'registration'
                ?
                    <RegistrationForm
                        registration={registration}
                    />
                :
                    <EmailAuthForm
                        emailVeryfi={emailVeryfi}
                        emailVerificationStatus={emailVerificationStatus}
                    />
            }

        </div>
    )
}