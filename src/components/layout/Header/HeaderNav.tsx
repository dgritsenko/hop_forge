'use client';

import { NavButton } from '@/components/shared/NavButton';

const navItems = [
	{ href: '/', label: 'Главная' },
	{ href: '/catalog', label: 'Каталог' },
	{ href: '/editor', label: 'Конструктор' },
	{ href: '/about', label: 'О нас' },
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