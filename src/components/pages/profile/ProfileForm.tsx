'use client'

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { profileSchema, IProfileForm } from "@/lib/validators"
import { useUser } from "@/hooks/useUser"
import { useUserActions } from "@/hooks/useUserActions"
import InputForm from "@/components/shared/InputForm/InputForm"
import { useEffect, useState } from "react"
import PasswordChangeModal from "./PasswordChangeModal"
import numberPhoneValidator from "@/utils/numberPhoneValidator"

export default function ProfileForm(){

	const { user } = useUser();
	
	const { 
		updateUserData, 
		logout, 
		updateUserPassword
	} = useUserActions();
	
	const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

	const {
		control, 
		handleSubmit,
		formState:{errors, isSubmitting},
		reset
	} = useForm<IProfileForm>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			name: user?.name || '',
			email: user?.email || '',
			phoneNumber: numberPhoneValidator(user?.numberPhone || ''),
			birthDate: user?.birthDate || '',
		}
	});

	// useEffect(() => {
	// 	console.log('Ошибки валидации:', errors)
	// }, [errors])

	const onSubmit = (formData: IProfileForm) => {
		updateUserData(formData).unwrap()
			.then(() => {
			})
			.catch((err: unknown) => {
				if (err instanceof Error) {
					console.error(err.message);
				} else if (typeof err === 'string') {
					console.error(err);
				} else {
					console.error('Неизвестная ошибка при обновлении профиля');
				}
			});
	};

	if (!user) return null;

	return(
		<>
			<form
				className="
					
					w-full max-w-2xl mx-auto p-6 mt-10 md:p-8 
					bg-white rounded-2xl shadow-lg 
					border border-stone-200
					flex flex-col gap-6
					transition-all duration-300 ease-in-out
				"
				onSubmit={handleSubmit(formData=>{
					onSubmit(formData)
				
				})}
			>
				<div className="text-center mb-2">
					<h2 className="text-3xl font-bold text-stone-800">Личные данные</h2>
					<p className="text-stone-600 text-sm mt-1">Редактируйте информацию о себе</p>
				</div>

				<InputForm
					control = {control}
					name = {'name'}
					type = {'text'}
					placeholder = {"Иван Иванов"}
					label = {'Имя'}
					error = {errors.name}
					className = {'text-base'}
				/>

				{/* <div className="w-full text-left">
					<label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
					<input 
						type="text" 
						value={user.email} 
						disabled 
						className="
							w-full p-3 rounded-lg 
							bg-stone-100 text-stone-500 
							border border-stone-200 
							cursor-not-allowed
							transition-all duration-300
						"
					/>
					<p className="text-xs text-stone-500 mt-1">Email нельзя изменить</p>
				</div> */}

				<InputForm
					control = {control}
					name = {'email'}
					type = {'email'}
					placeholder = {"sample@email.com"}
					label = {'Email'}
					error = {errors.name}
					className = {'text-base'}
				/>

				<InputForm
					control = {control}
					name = {'phoneNumber'}
					type = {'tel'}
					placeholder = {"+7(999) 999-99-99"}
					label = {'Телефон'}
					error = {errors.phoneNumber}
					className = {'text-base'}

					customFormatted
					formatHandler={numberPhoneValidator}
				/>


				<InputForm
					control = {control}
					name = {'birthDate'}
					type = {'date'}
					label = {'Дата рождения'}
					error = {errors.birthDate}
					className = {'text-base'}
				/>


				<div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center pt-4 border-t border-stone-200">
					<Button 
						type="submit"

						disabled={isSubmitting}
						className="
							bg-amber-600 text-white 
							hover:bg-amber-700 
							disabled:opacity-50 disabled:cursor-not-allowed
							p-2 rounded-lg font-medium
							transition-all duration-300 ease-in-out
							hover:shadow-md
						"
					>
						{isSubmitting ? 'Сохранение...' : 'Сохранить изменения'}
					</Button>
					
					<Button 
						type="button" 
						variant="outline"
						onClick={() => setIsPasswordModalOpen(true)}
						className="
							border-amber-600 text-amber-600 
							hover:bg-amber-50
							p-2 rounded-lg font-medium
							transition-all duration-300 ease-in-out
						"
					>
						Сменить пароль
					</Button>

					<Button 
						type="button" 
						variant="destructive"
						onClick={() => logout()}
						className="
							bg-stone-700 text-white
							hover:bg-stone-800
							p-2 rounded-lg font-medium
							transition-all duration-300 ease-in-out
						"
					>
						Выйти из аккаунта
					</Button>
				</div>
				
				{errors.root && (
					<p className="text-amber-600 text-sm text-center bg-amber-50 p-3 rounded-lg">
						{errors.root.message}
					</p>
				)}
			</form>

			<PasswordChangeModal 
				isOpen={isPasswordModalOpen} 
				onClose={() => setIsPasswordModalOpen(false)}
				onSubmit={updateUserPassword}
			/>
		</>
	)
}