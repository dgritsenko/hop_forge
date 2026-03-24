'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import Image from 'next/image';
import beerGround from '@/assets/img/landing/beerGround2.jpg'

interface HeroProps {
	className?: string;
}

export function Hero({ className = '' }: HeroProps) {
	return (
		<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
				<Image
					src={beerGround}
					alt="Крафтовое пиво"
					fill
					className="object-cover opacity-40"
					priority
				/>
				
			</div>
			
			<div className="relative z-10 container mx-auto px-4 text-center">
				<div className="inline-block mb-6 px-4 py-2 bg-amber-600/20 border border-amber-500/50 rounded-full">
					<span className="text-amber-400 font-semibold text-sm">18+ Только для совершеннолетних</span>
				</div>
				
				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
					Hop Forge — Незабываемый опыт и эмоции
					<span className="block mt-2 text-amber-500">
						Сотвори тот напиток, о котором всегда мечтал!
					</span>
				</h1>
				
				<p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto mb-10">
					Уникальный конструктор крафтового пива. Выбирай ингредиенты, 
					экспериментируй со вкусами и получи свой персональный напиток.
				</p>
				
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Link href="/editor">
						<Button 
							size="lg"
							className="w-full sm:w-auto px-8 py-6 text-lg bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300"
						>
							Создать пиво
						</Button>
					</Link>
					<Link href="/catalog">
						<Button 
							size="lg"
							variant="outline"
							className="w-full sm:w-auto px-8 py-6 text-lg border-0 bg-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-all duration-300"
						>
							Смотреть каталог
						</Button>
					</Link>
				</div>
			</div>
			
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
		</section>
	);
}