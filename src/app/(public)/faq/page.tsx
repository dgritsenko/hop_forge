import { AgeVerification } from '@/components/shared/AgeVerification';
import { FaqHero } from '@/components/pages/faq/FaqHero';
import { FaqList } from '@/components/pages/faq/FaqList';

export default function FaqPage() {
	return (
		<>
			<AgeVerification />
			<FaqHero />
			<FaqList />
		</>
	);
}