'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { passwordChangeSchema, IPasswordChangeForm } from "@/lib/validators"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import InputForm from "@/components/shared/InputForm/InputForm"
import { ThunkAction } from "@reduxjs/toolkit"

interface PasswordChangeModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: IPasswordChangeForm) => ReturnType<ThunkAction<any, any, any, any>>;
}

export default function PasswordChangeModal({isOpen, onClose, onSubmit}: PasswordChangeModalProps){
	const {
		control, 
		handleSubmit,
		formState:{errors, isSubmitting},
		reset
	} = useForm<IPasswordChangeForm>({
		resolver: zodResolver(passwordChangeSchema),
		defaultValues: {
			currentPassword:'',
			newPassword:'',
			confirmPassword:'',
		}
	});

	const handleFormSubmit = (data: IPasswordChangeForm) => {

		console.log('Обновлённые данные: ',data)

		onSubmit(data).unwrap()
			.then(() => {
				reset();
				onClose();
			})
		.catch((err: unknown) => {
			if (err instanceof Error) {
				console.error(err.message);
			} else if (typeof err === 'string') {
				console.error(err);
			} else {
				console.error('Неизвестная ошибка при смене пароля');
			}
		});
	};

	return(
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="bg-stone-200 rounded-4xl p-10">
				<DialogHeader>
					<DialogTitle>Смена пароля</DialogTitle>
				</DialogHeader>
				
				<form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 mt-4">
					<InputForm
						control = {control}
						name = {'currentPassword'}
						type = {'password'}
						placeholder = {"Текущий пароль"}
						label = {'Текущий пароль'}
						error = {errors.currentPassword}
					/>

					<InputForm
						control = {control}
						name = {'newPassword'}
						type = {'password'}
						placeholder = {"Новый пароль"}
						label = {'Новый пароль'}
						error = {errors.newPassword}
					/>

					<InputForm
						control = {control}
						name = {'confirmPassword'}
						type = {'password'}
						placeholder = {"Повторите пароль"}
						label = {'Подтверждение'}
						error = {errors.confirmPassword}
					/>

					<DialogFooter className="mt-4">
						<Button
							type="button" 
							variant="outline" 
							onClick={onClose}
							className="
								border-amber-600 text-amber-600 
								hover:bg-amber-50
								py-3 px-6 rounded-lg font-medium
								transition-all duration-300 ease-in-out
							"	
						>
							Отмена
						</Button>
						<Button 
							type="submit" 
							disabled={isSubmitting}
							className="
							bg-amber-600 text-white 
							hover:bg-amber-700 
							disabled:opacity-50 disabled:cursor-not-allowed
							py-3 px-6 rounded-lg font-medium
							transition-all duration-300 ease-in-out
							hover:shadow-md
							"
						>
							{isSubmitting ? 'Сохранение...' : 'Сохранить'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}