import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import UserInitializer from '@/providers/UserInitializer';
import { Providers } from '@/providers/Providers';

export const metadata: Metadata = {
	title: 'Хмельная Кузня | Крафтовый пивоваренный конструктор',
	description: 'Создай своё идеальное крафтовое пиво',
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Providers>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}