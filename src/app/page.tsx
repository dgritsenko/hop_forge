'use client';

import { Hero } from '@/components/pages/landing/Hero';
import { BeerSlider } from '@/components/pages/landing/BeerSlider';
import { Features } from '@/components/shared/Features/Features';
import { AgeVerification } from '@/components/shared/AgeVerification';
import { beerCards } from '@/lib/mocks/beerCards';
import { features } from '@/lib/mocks/features';

export default function page() {

	return (
		<>
			<AgeVerification />
			<Hero />
			<BeerSlider beerCards={beerCards} />
			<Features features={features} />
		</>
	);
}