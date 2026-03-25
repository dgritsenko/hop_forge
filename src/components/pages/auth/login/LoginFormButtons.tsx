import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginFormButtons(){

    return (
        <div
            className='mt-10'
        >
            <Button
                className="
                    p-5 cursor-pointer rounded-4xl
                    text-lg bg-amber-500 text-white 
                    transition-all duration-300
                    duration
                    hover:bg-amber-700 hover:text-amber-600
                "
                type="submit"
            >
                Войти
            </Button>
            <Link
                href={'/auth/registration'}
            >
                <Button
                    className="
                        ml-4 p-5 cursor-pointer rounded-4xl
                        text-lg bg-amber-100 text-amber-600 
                        transition-all duration-300
                        duration
                        hover:bg-amber-50
                    "
                >
                    Регистрация
                </Button>
            </Link>
        </div>
    )
}