import z from "zod";

export const loginSchema = z.object({
	email: z.email('Неккоректный email'),
	password: 
		z.string()
		.min(8,'Пароль должен быть не менее 8 символов')
		.max(30,'Пароль должен быть не больше 30 символов'),
});

export type ILoginForm = z.infer<typeof loginSchema>

export const registrationSchema = z.object({
	name: z.string(),
	email: z.email('Неккоректный email'),
	phoneNumber: z.string().regex(/^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Неправильный формат номера телефона'),
	birthDate: z.date('Это должна быть дата'),
	password:
		z.string()
		.min(8,'Пароль должен быть не менее 8 символов')
		.max(30,'Пароль должен быть не больше 30 символов'),
	
});

export type IRegistrationForm = z.infer<typeof registrationSchema>
