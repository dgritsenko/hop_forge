'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';

const AGE_STORAGE_KEY = 'hopforge_age_verified';

export function AgeVerification() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const verified = localStorage.getItem(AGE_STORAGE_KEY);
		if (!verified) {
			setIsOpen(true);
		}
	}, []);

	const handleConfirm = () => {
		localStorage.setItem(AGE_STORAGE_KEY, 'true');
		setIsOpen(false);
	};

	const handleReject = () => {
		window.location.href = 'https://google.com';
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-md bg-white">
				<DialogHeader>
					<DialogTitle className="text-2xl text-stone-800">
						Вам есть 18 лет?
					</DialogTitle>
					<DialogDescription className="text-stone-600 mt-2">
						Сайт содержит информацию о продукции, предназначенной только для совершеннолетних.
						Просим подтвердить ваш возраст для продолжения.
					</DialogDescription>
				</DialogHeader>
				
				<div className="flex flex-col sm:flex-row gap-3 mt-6">
					<Button
						onClick={handleConfirm}
						className="flex-1 bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300"
					>
						Да, мне есть 18 лет
					</Button>
					<Button
						onClick={handleReject}
						variant="outline"
						className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-100 transition-all duration-300"
					>
						Нет, мне нет 18 лет
					</Button>
				</div>
				
				<p className="text-xs text-stone-500 mt-4 text-center">
					Чрезмерное употребление алкоголя вредит вашему здоровью
				</p>
			</DialogContent>
		</Dialog>
	);
}