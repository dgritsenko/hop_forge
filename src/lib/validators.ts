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
	name: z.string('Поле не может быть пустым').min(1,'Поле не может быть пустым'),
	email: z.email('Неккоректный email'),
	phoneNumber: z.string('Поле не может быть пустым').regex(/^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Неправильный формат номера телефона'),
	birthDate: z.string('Поле не может быть пустым').min(1,'Поле не может быть пустым'),
	password:
		z.string('Поле не может быть пустым')
		.min(8,'Пароль должен быть не менее 8 символов')
		.max(30,'Пароль должен быть не больше 30 символов'),
	
});

export type IRegistrationForm = z.infer<typeof registrationSchema>

export const emailAuthSchema = z.object({
	authCode: 
		z.number()
		.min(6,'Код не меньше 6 символов')
		.max(6,'Код не больше 6 символов')
});

export type IEmailAuthForm = z.infer<typeof emailAuthSchema>

// --- Новые валидаторы для профиля ---

export const profileSchema = z.object({
	name: z.string()
		.min(2, 'Имя должно содержать минимум 2 символа')
		.max(50, 'Имя не должно превышать 50 символов'),
	phoneNumber: z.string()
		.regex(/^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 
		'Неправильный формат номера телефона'),
	birthDate: z.string('Поле не может быть пустым').min(1,'Поле не может быть пустым'),
});

export type IProfileForm = z.infer<typeof profileSchema>;

export const passwordChangeSchema = z.object({
	currentPassword: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
	newPassword: z.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.max(30, 'Пароль должен быть не больше 30 символов'),
	confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
	message: "Пароли не совпадают",
	path: ["confirmPassword"],
});

export type IPasswordChangeForm = z.infer<typeof passwordChangeSchema>;