// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(value: string) {
	// Удаляем всё кроме цифр
	const numbers = value.replace(/\D/g, '');
	
	// Добавляем + в начале если нет
	let formatted = numbers.startsWith('7') || numbers.startsWith('8') ? numbers : '7' + numbers;
	
	// Обрезаем лишнее (11 цифр для РФ)
	if (formatted.length > 11) formatted = formatted.slice(0, 11);
	
	// Форматируем: +7 (999) 999-99-99
	if (formatted.length > 1) {
		formatted = '+7 (' + formatted.slice(1, 4);
	}
	if (formatted.length > 5) {
		formatted = formatted.slice(0, 6) + ') ' + formatted.slice(6);
	}
	if (formatted.length > 9) {
		formatted = formatted.slice(0, 10) + '-' + formatted.slice(10);
	}
	if (formatted.length > 12) {
		formatted = formatted.slice(0, 13) + '-' + formatted.slice(13);
	}
	if (formatted.length > 15) {
		formatted = formatted.slice(0, 16) + '-' + formatted.slice(16);
	}
	
	return formatted;
}