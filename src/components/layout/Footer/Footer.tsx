'use client';

import { FooterNav } from './FooterNav';
import { FooterSocial } from './FooterSocial';
import Image from 'next/image';
import Link from 'next/link';
import siteLogo from '@/assets/img/icons/site-logo.png';

const mainNavLinks = [
	{ href: '/', label: 'Главная' },
	{ href: '/catalog', label: 'Каталог' },
	{ href: '/editor', label: 'Конструктор' },
	{ href: '/about', label: 'О нас' },
];

const userNavLinks = [
	{ href: '/auth/login', label: 'Войти' },
	{ href: '/auth/register', label: 'Регистрация' },
	{ href: '/profile', label: 'Профиль' },
	{ href: '/cart', label: 'Корзина' },
];

const infoNavLinks = [
	{ href: '/privacy', label: 'Политика конфиденциальности' },
	{ href: '/terms', label: 'Условия использования' },
	{ href: '/faq', label: 'FAQ' },
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full flex justify-center items-center bg-stone-200 border-t border-stone-300">
			<div className="px-4 py-12 text-center ">


				<div className="border-t border-stone-300 mt-8 pt-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<div className="lg:col-span-2">
							<FooterNav title="Информация" links={infoNavLinks} />
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-stone-800 text-base">Режим работы</h4>
							<p className="text-sm text-stone-600">Пн-Пт: 10:00 - 20:00</p>
							<p className="text-sm text-stone-600">Сб-Вс: 12:00 - 18:00</p>
						</div>

						<div className="flex flex-col gap-2">
							<h4 className="font-semibold text-stone-800 text-base">Адрес</h4>
							<p className="text-sm text-stone-600">г. Москва, ул. Пивоваров, д. 1</p>
						</div>
					</div>
				</div>

				<div className="border-t border-stone-300 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-sm text-stone-600">
						© {currentYear} Хмельная Кузня. Все права защищены.
					</p>
					<p className="text-xs text-stone-500">
						Чрезмерное употребление алкоголя вредит вашему здоровью. 18+
					</p>
				</div>
			</div>
		</footer>
	);
}