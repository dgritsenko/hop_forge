import { z } from 'zod';
import { FieldError } from 'react-hook-form';

const reqField = 'Поле обязательно к заполнению'

export const emailAuthSchema = z.object({
	authCode: 
		z.number(reqField)
		.min(6,'Код не меньше 6 символов')
		.max(6,'Код не больше 6 символов')

});

export type IEmailAuthForm = z.infer<typeof emailAuthSchema>;

export const profileSchema = z.object({
    name: z.string(reqField).min(2, 'Имя должно содержать минимум 2 символа'),
    email: z.email('Введите корректный email'),
    phoneNumber: z.string(reqField).regex(/^\+\d\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Неверный формат телефона'),
    birthDate: z.string(reqField).refine((date) => {
        const birth = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        return age >= 18;
    }, 'Вам должно быть не менее 18 лет'),
});

export type IProfileForm = z.infer<typeof profileSchema>;


export const passwordChangeSchema = z.object({
    currentPassword: z.string(reqField).min(6, 'Пароль должен содержать минимум 6 символов'),
    newPassword: z.string(reqField).min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string(reqField),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});

export type IPasswordChangeForm = z.infer<typeof passwordChangeSchema>;

export const registrationSchema = z.object({
    name: z.string(reqField).min(2, 'Имя должно содержать минимум 2 символа'),
    email: z.email('Введите корректный email'),
    password: z.string(reqField).min(6, 'Пароль должен содержать минимум 6 символов'),
    phoneNumber: z.string(reqField).regex(/^\+\d\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Неверный формат телефона'),
    birthDate: z.string(reqField).refine((date) => {
        const birth = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();
        return age >= 18;
    }, 'Вам должно быть не менее 18 лет'),
});

export type IRegistrationForm = z.infer<typeof registrationSchema>;

export const loginSchema = z.object({
	email: z.email('Введите корректный email'),
	password: 
		z.string(reqField)
		.min(8,'Пароль должен быть не менее 8 символов')
		.max(30,'Пароль должен быть не больше 30 символов'),
});

export type ILoginForm = z.infer<typeof loginSchema>

export const orderSchema = z.object({
    customerName: z
        .string(reqField)
        .min(2, 'ФИО должно содержать минимум 2 символа'),
    customerPhone: z
        .string(reqField)
        .regex(/^\+\d\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Неверный формат телефона'),
    customerEmail: z
        .email('Введите корректный email'),
    pickupType: z.enum(['immediate', 'preorder']),
    pickupDate: z.string().optional(),
    pickupTime: z.string().optional(),
    pickupPoint: z.string().min(1, 'Выберите пункт выдачи'),
    comment: z.string().optional(),
});

export type IOrderForm = z.infer<typeof orderSchema>;


export const getFieldError = (error?: FieldError): FieldError | undefined => {
    return error;
};