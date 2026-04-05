'use client'

import { useState } from "react";
import { useCart } from '@/hooks/useCart';
import { IOrderForm } from "@/lib/validators";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function useOrder(){
    const { items, clearCartItems } = useCart();
    const router = useRouter();
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const API_ORDER = 'https:/SERVER/api/order' 

    const createOrder = async (data: IOrderForm) => {
        setIsSubmitting(true);

        try {
            const response = await axios.post(
                `${API_ORDER}/createOrder`,
                data,
                {
                    withCredentials:true
                }
            )

            clearCartItems();

            router.push('/order/success');
        } catch (error) {
            console.error('Ошибка оформления заказа:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return{        
        isSubmitting, 
        setIsSubmitting,

        createOrder,
    }
}