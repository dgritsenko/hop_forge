'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export interface NavButtonProps {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

export function NavButton({ href, children, className = '', onClick }: NavButtonProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			onClick={onClick}
			className={cn(
				'relative p-2 text-sm font-medium rounded-lg',
				'transition-all duration-300 ease-in-out',
				'text-stone-600 hover:text-amber-600',
				'hover:bg-stone-200/50',
				isActive && 'text-amber-600 bg-amber-50',
				className
			)}
		>
			{children}
		</Link>
	);
}