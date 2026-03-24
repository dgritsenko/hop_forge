'use client';

import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
	return (
		<Link
			href={href}
			aria-label={label}
			className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center text-stone-700 hover:bg-amber-600 hover:text-white transition-all duration-300 hover:scale-105"
		>
			{icon}
		</Link>
	);
}

export function FooterSocial() {
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-semibold text-stone-800 text-base">Мы в соцсетях</h4>
			<div className="flex gap-3 flex-wrap">
				<SocialLink
					href="#"
					icon={<Instagram className="w-5 h-5" />}
					label="Instagram"
				/>
				<SocialLink
					href="#"
					icon={<Facebook className="w-5 h-5" />}
					label="Facebook"
				/>
				<SocialLink
					href="#"
					icon={<Twitter className="w-5 h-5" />}
					label="Twitter"
				/>
				<SocialLink
					href="#"
					icon={<Youtube className="w-5 h-5" />}
					label="YouTube"
				/>
			</div>
			
			<div className="flex flex-col gap-2 mt-2">
				<a
					href="noHope@hopforge.ru"
					className="flex items-center gap-2 text-sm text-stone-600 hover:text-amber-600 transition-colors duration-300"
				>
					<Mail className="w-4 h-4" />
					noHope@hopforge.ru
				</a>
				<a
					href="tel:+88005553535"
					className="flex items-center gap-2 text-sm text-stone-600 hover:text-amber-600 transition-colors duration-300"
				>
					<Phone className="w-4 h-4" />
					+8 (800) 555-35-35
				</a>
			</div>
		</div>
	);
}