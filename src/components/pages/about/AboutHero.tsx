'use client';

import Image from 'next/image';
import beerGround from '@/assets/img/landing/beerGround2.jpg';

export function AboutHero() {
	return (
		<section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
				<Image
					src={beerGround}
					alt="О компании Хмельная Кузня"
					fill
					className="object-cover opacity-40"
					priority
				/>
			</div>
			
			<div className="relative z-10 container mx-auto px-4 text-center">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
					Хмельная Кузня
					<span className="block mt-2 text-amber-500">
						Где рождается ПИВО
					</span>
				</h1>
				<p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto">
					Мы объединяем технологии и традиции пивоварения, чтобы каждый мог создать напиток, который идеально подходит именно ему.
				</p>
			</div>
			
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
		</section>
	);
}