'use client';

import { NavButton } from '@/components/shared/NavButton';

const navItems = [
	{ href: '/', label: 'Главная' },
	{ href: '/about', label: 'О нас' },
	{ href: '/contacts', label: 'Контакты' },
	{ href: '/faq', label: 'Частые вопросы' },
];


export function HeaderNav() {
	return (
		<nav className="hidden lg:flex items-center gap-6">
			{navItems.map((item) => (
				<NavButton key={item.href} href={item.href}>
					{item.label}
				</NavButton>
			))}
		</nav>
	);
}