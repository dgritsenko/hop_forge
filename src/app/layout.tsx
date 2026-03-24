import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/components/providers/ReduxProvider';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const inter = Inter({ subsets: ['latin'] });

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
		<html lang="ru" className={cn('font-sans', geist.variable)}>
			<body className={cn(inter.className, 'min-h-screen bg-stone-50 flex flex-col')}>
				<ReduxProvider>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</ReduxProvider>
			</body>
		</html>
	);
}