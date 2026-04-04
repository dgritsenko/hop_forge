import { AgeVerification } from '@/components/shared/AgeVerification';
import { AboutHero } from '@/components/pages/about/AboutHero';
import { AboutMission } from '@/components/pages/about/AboutMission';
import { AboutCTA } from '@/components/pages/about/AboutCTA';
import { Features } from '@/components/shared/Features/Features';
import { features } from '@/lib/mocks/features';

export default function AboutPage() {
	return (
		<>
			<AgeVerification />
			<AboutHero />
			<AboutMission />
			<Features
				features={features}
			/>
			<AboutCTA />
		</>
	);
}