'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { BeerCard } from '@/hooks/useLanding';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import 'swiper/css';

interface BeerSliderProps {
	beerCards: BeerCard[];
	className?: string;
}

export function BeerSlider({ beerCards, className = '' }: BeerSliderProps) {
	return (
		<section className={`w-full py-16 bg-stone-50 ${className}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-10">
					<h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
						Популярные рецепты
					</h2>
					<p className="text-stone-600 max-w-xl mx-auto">
						Вдохновись нашими рецептами или создай свой уникальный напиток
					</p>
				</div>
				
				<Swiper
					modules={[Autoplay]}
					spaceBetween={24}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					className="pb-12"
					loop
				>
					{beerCards.map((beer) => (
						<SwiperSlide key={beer.id}>
							<div className="h-full">
								<div className={`h-64 rounded-xl bg-gradient-to-br ${beer.color} flex items-center justify-center mb-4 shadow-lg`}>
									<span className="text-white text-6xl font-bold opacity-50">
										{beer.abv}%
									</span>
								</div>
								
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold text-stone-800">
											{beer.name}
										</h3>
										<span className="text-xs px-2 py-1 bg-stone-200 rounded-full text-stone-600">
											{beer.style}
										</span>
									</div>
									
									<p className="text-sm text-stone-600 line-clamp-2">
										{beer.description}
									</p>
									
									<div className="flex items-center gap-4 text-sm text-stone-500">
										<span>ABV: <strong className="text-stone-700">{beer.abv}%</strong></span>
										<span>IBU: <strong className="text-stone-700">{beer.ibu}</strong></span>
									</div>
									
									<Link href={`/editor?recipe=${beer.id}`}>
										<Button 
											variant="outline"
											className="w-full mt-3 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300"
										>
											Повторить рецепт
										</Button>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}