'use client'

import {useState} from 'react'

import { Form } from "radix-ui";
import { Input } from "@/components/ui/input";
import { eventNames } from 'process';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginForm(){

    const [
        userPassword,
        setUserPassword
    ] = useState<string>()

    const [
        userEmail,
        setUserEmail
    ] = useState<string>()

    return (
        <Form.Root
            className="
                w-100 p-10 mt-50 rounded-4xl
                bg-stone-200
                justify-center items-center text-center    
            "
            // action={login}
        >
            <Form.Field
                name="email"
            >
                <div
                >
                    <Form.Label
                        className='text-lg'
                    >
                        Email
                    </Form.Label>

                    <div>
                        <Form.Message match="valueMissing">
                            Пожалуйста введите email
                        </Form.Message>
                        
                        <Form.Message match="typeMismatch">
                            Вы ввели неккоректный email
                        </Form.Message>
                    </div>
                </div>
                <Form.Control asChild>
                    <Input 
                        type="email"
                        required 
                        placeholder='hopForge@hopForge.ru'

                        value={userEmail}
                        onChange={event=>setUserEmail(event.target.value)}

                    />
                </Form.Control>
            </Form.Field>
            <Form.Field 
                className='mt-10'
                name="question"
            >
                <div

                >
                    <Form.Label
                        className='text-lg'
                    >Пароль</Form.Label>
                    <div>
                        <Form.Message match="valueMissing">
                            Please enter a question
                        </Form.Message>
                    </div>
                </div>
                <Form.Control asChild>
                    <Input 
                        type="password"
                        placeholder='Введите пароль'

                        value={userPassword}
                        onChange={event=>setUserPassword(event.target.value)}
                        />
                </Form.Control>
            </Form.Field>
            <div
                className='mt-10'
            >
                <Form.Submit 
                    asChild
                >
                    <Button
                        className="
                            p-5 cursor-pointer rounded-4xl
                            text-lg bg-amber-500 text-white 
                            transition-all duration-300
                            duration
                            hover:bg-amber-700 hover:text-amber-600
                        "
                    >
                        Войти
                    </Button>
                </Form.Submit>
                <Link
                    href={'/auth/registration'}
                >
                    <Button
                        className="
                            ml-4 p-5 cursor-pointer rounded-4xl
                            text-lg bg-amber-50 text-amber-600 
                            transition-all duration-300
                            duration
                            hover:bg-stone-200/50
                        "
                    >
                        Регистрация
                    </Button>
                </Link>
            </div>
        </Form.Root>
    )
}
