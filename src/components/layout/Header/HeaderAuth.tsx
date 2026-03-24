'use client';

import { Button } from '@/components/ui/button';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';

export function HeaderAuth() {
	// Пока мокаем что заглушка
	const isAuthenticated = false;
	const userName = 'Пивовар';

	if (isAuthenticated) {
		return (
			<Link href="/profile">
				<Button 
					variant="ghost" 
					className="gap-2 text-stone-700 hover:text-amber-600 hover:bg-stone-200/50 transition-all duration-300"
				>
					<UserCircle className="w-5 h-5" />
					<span className="hidden sm:inline">{userName}</span>
				</Button>
			</Link>
		);
	}

	return (
		<div className="flex items-center gap-2">
			<Link href="/auth/login">
				<Button 
					variant="ghost" 
					className="text-stone-700 hover:text-amber-600 hover:bg-stone-200/50 transition-all duration-300"
				>
					Войти
				</Button>
			</Link>
			<Link href="/auth/register">
				<Button 
					className="p-3 bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300"
				>
					Регистрация
				</Button>
			</Link>
		</div>
	);
}