'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavButton } from '@/components/shared/NavButton';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
	{ href: '/', label: 'Главная' },
	{ href: '/catalog', label: 'Каталог' },
	{ href: '/editor', label: 'Конструктор' },
	{ href: '/about', label: 'О нас' },
	{ href: '/cart', label: 'Корзина' },
];

export function HeaderMobile() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button className="lg:hidden p-2 rounded-lg hover:bg-stone-200 transition-colors duration-300">
					<Menu className="w-6 h-6 text-stone-700" />
				</button>
			</SheetTrigger>
			<SheetContent 
				side="right" 
				className="w-[300px] sm:w-[400px] bg-stone-50"
			>
				<div className="flex flex-col items-center justify-center mt-8 gap-3">
					{navItems.map((item) => (
						<NavButton
							key={item.href}
							href={item.href}
							className="w-full text-center py-3 text-base"
							onClick={() => setOpen(false)}
						>
							{item.label}
						</NavButton>
					))}
					
					<div className="w-full border-t border-stone-200 my-4" />
					
					<NavButton
						href="/auth/login"
						className="w-full text-center py-3 text-base"
						onClick={() => setOpen(false)}
					>
						Войти
					</NavButton>
					<NavButton
						href="/auth/registration"
						className="w-full text-center py-3 text-base bg-amber-600 text-white hover:bg-amber-700"
						onClick={() => setOpen(false)}
					>
						Регистрация
					</NavButton>
				</div>
			</SheetContent>
		</Sheet>
	);
}