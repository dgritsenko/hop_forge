import { User, Headphones, Mail, Phone } from 'lucide-react';

const contactItems = [
	{
		label: 'Основатель и главный пивовар',
		name: 'Виталий Пиволюбов',
		value: 'vitali@hopforge.ru',
		icon: <User className="w-6 h-6" />,
	},
	{
		label: 'Клиентская поддержка',
		name: 'Отдел заботы',
		value: 'support@hopforge.ru',
		icon: <Headphones className="w-6 h-6" />,
	},
	{
		label: 'Электронная почта',
		name: 'Для заказов и вопросов',
		value: 'info@hopforge.ru',
		icon: <Mail className="w-6 h-6" />,
	},
	{
		label: 'Телефон',
		name: 'Пн-Вс с 10:00 до 20:00',
		value: '+7 (999) 123-45-67',
		icon: <Phone className="w-6 h-6" />,
	},
];

export function ContactsCards() {
	return (
		<section className="w-full py-12 -mt-16 relative z-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{contactItems.map((item, idx) => (
						<div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-stone-200 hover:shadow-lg transition-shadow duration-300">
							<div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
								{item.icon}
							</div>
							<p className="text-xs uppercase tracking-wider text-stone-500 mb-1">{item.label}</p>
							<h3 className="text-lg font-semibold text-stone-800 mb-1">{item.name}</h3>
							<p className="text-stone-600">{item.value}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}