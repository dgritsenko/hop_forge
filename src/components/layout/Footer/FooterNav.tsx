'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterNavProps {
	title: string;
	links: { href: string; label: string }[];
	className?: string;
}

export function FooterNav({ title, links, className = '' }: FooterNavProps) {
	return (
		<div className={cn('flex flex-col gap-3', className)}>
			<h4 className="font-semibold text-stone-800 text-base">{title}</h4>
			<ul className="flex flex-col gap-2">
				{links.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className="text-sm text-stone-600 hover:text-amber-600 transition-colors duration-300"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}