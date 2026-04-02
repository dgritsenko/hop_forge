// src/lib/validators.ts

import { z } from 'zod';
import { FieldError } from 'react-hook-form';

// --- Схема заказа ---
export const orderSchema = z.object({
    customerName: z
        .string()
        .min(2, 'ФИО должно содержать минимум 2 символа')
        .regex(/^[А-Яа-яA-Za-z\s-]+$/, 'ФИО должно содержать только буквы'),
    customerPhone: z
        .string()
        .min(10, 'Введите корректный номер телефона')
        .regex(/^[\d\+\-\s()]+$/, 'Неверный формат телефона'),
    customerEmail: z
        .string()
        .email('Введите корректный email'),
    pickupType: z.enum(['immediate', 'preorder']),
    pickupDate: z.string().optional(),
    pickupTime: z.string().optional(),
    pickupPoint: z.string().min(1, 'Выберите пункт выдачи'),
    comment: z.string().optional(),
});

export type IOrderForm = z.infer<typeof orderSchema>;

// --- Схема профиля (существующая) ---
export const profileSchema = z.object({
    name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
    email: z.string().email('Введите корректный email'),
    numberPhone: z.string().min(10, 'Введите корректный номер телефона'),
    birthDate: z.string(),
});

export type IProfileForm = z.infer<typeof profileSchema>;

// --- Схема смены пароля ---
export const passwordChangeSchema = z.object({
    currentPassword: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    newPassword: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});

export type IPasswordChangeForm = z.infer<typeof passwordChangeSchema>;

// --- Схема регистрации ---
export const registrationSchema = z.object({
    name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
    email: z.string().email('Введите корректный email'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string(),
    numberPhone: z.string().min(10, 'Введите корректный номер телефона'),
    birthDate: z.string().refine((date) => {
        const birth = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        return age >= 18;
    }, 'Вам должно быть не менее 18 лет'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});

export type IRegistrationForm = z.infer<typeof registrationSchema>;

// --- Схема логина ---
export const loginSchema = z.object({
    email: z.string().email('Введите корректный email'),
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
});

export type ILoginForm = z.infer<typeof loginSchema>;

// --- Хелпер для получения ошибки ---
export const getFieldError = (error?: FieldError): FieldError | undefined => {
    return error;
};