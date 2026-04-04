import { AgeVerification } from '@/components/shared/AgeVerification';
import { ContactsHero } from '@/components/pages/contacts/ContactsHero';
import { ContactsCards } from '@/components/pages/contacts/ContactsCards';
import { ContactsInfo } from '@/components/pages/contacts/ContactsInfo';

export default function ContactsPage() {
	return (
		<>
			<AgeVerification />
			<ContactsHero />
			<ContactsCards />
			<ContactsInfo />
		</>
	);
}