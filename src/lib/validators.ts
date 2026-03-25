import z from "zod";

export const loginSchema = z.object({
	email: z.email('Неккоректный email'),
	password: 
		z.string()
		.min(8,'Пароль должен быть не менее 8 символов')
		.max(30,'Пароль должен быть не больше 30 символов'),
});

export type ILoginForm = z.infer<typeof loginSchema>
