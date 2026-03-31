'use client';

import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';

export function HeaderAuth() {

	const {
		user,
		isAuthenticated
	} = useUser()

	if (isAuthenticated && user) {
		return (
			<Link href="/profile">
				<Button 
					variant="ghost" 
					className="gap-2 text-stone-700 hover:text-amber-600 hover:bg-stone-200/50 transition-all duration-300"
				>
					<UserCircle className="w-5 h-5" />
					<span className="hidden sm:inline">{user.name}</span>
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
			<Link href="/auth/registration">
				<Button 
					className="p-3 bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300"
				>
					Регистрация
				</Button>
			</Link>
		</div>
	);
}