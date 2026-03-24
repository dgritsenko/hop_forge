'use client';

import { Hero } from '@/components/pages/landing/Hero';
import { BeerSlider } from '@/components/pages/landing/BeerSlider';
import { Features } from '@/components/pages/landing/Features';
import { AgeVerification } from '@/components/shared/AgeVerification';
import { useLanding } from '@/hooks/useLanding';

export default function page() {
	const { beerCards, features } = useLanding();

	return (
		<>
			<AgeVerification />
			<Hero />
			<BeerSlider beerCards={beerCards} />
			<Features features={features} />
		</>
	);
}