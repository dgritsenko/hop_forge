'use client';

import { Sheet, SheetTitle, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavButton } from '@/components/shared/NavButton';

import { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, UserCircle } from 'lucide-react';

const navItems = [
	{ href: '/', label: 'Главная' },
	{ href: '/about', label: 'О нас' },
	{ href: '/contacts', label: 'Контакты' },
	{ href: '/faq', label: 'Частые вопросы' },
];



export function HeaderMobile() {
	const [open, setOpen] = useState(false);

	const {
		user,
		isAuthenticated
	} = useUser()

	return (
		<Sheet 
			open={open} 
			onOpenChange={setOpen}
			
		
		>
			<SheetTrigger 
				asChild
			>
				<button className="lg:hidden p-2 rounded-lg hover:bg-stone-200 transition-colors duration-300">
					<Menu className="w-6 h-6 text-stone-700" />
				</button>
			</SheetTrigger>
			<SheetTitle
				className='sr-only'
			>Приветики</SheetTitle>

			<SheetContent 
				side="right" 
				className="w-75 sm:w-100 bg-stone-50"
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

						{
							isAuthenticated && user
							? <>
								<Link href="/profile">
									<Button 
										className="gap-2 text-stone-700 hover:text-amber-600 hover:bg-stone-200/50 transition-all duration-300"
									>
										<UserCircle className="w-5 h-5" />
										<span className="">{user.name}</span>
									</Button>
								</Link>
							</>


							:
								<>
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
								</>
						}


				</div>
			</SheetContent>
		</Sheet>
	);
}