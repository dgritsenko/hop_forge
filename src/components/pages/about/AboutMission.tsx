export function AboutMission() {
	return (
		<section className="w-full py-16 bg-stone-50">
			<div className="container mx-auto px-4 max-w-3xl text-center">
				<h2 className="text-3xl font-bold text-stone-800 mb-6">Наша миссия</h2>
				<p className="text-lg text-stone-600 leading-relaxed mb-8">
					Крафтовое пивоварение — это не просто процесс, это искусство. Но искусство не должно быть недоступным. 
					Мы создали платформу, которая убирает барьеры между идеей и реализацией. 
					Будь то классический IPA с яркой хмелевой горечью или экспериментальный стаут с нотками кофе и ванили — 
					вы управляете рецептурой, а мы берем на себя всю техническую часть: от готовки до доставки.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
					<div className="p-4 bg-white rounded-lg shadow-sm">
						<h3 className="font-semibold text-stone-800 mb-2">Прозрачность</h3>
						<p className="text-sm text-stone-600">Полный контроль над каждым ингредиентом и этапом производства.</p>
					</div>
					<div className="p-4 bg-white rounded-lg shadow-sm">
						<h3 className="font-semibold text-stone-800 mb-2">Качество</h3>
						<p className="text-sm text-stone-600">Работаем только с сертифицированными поставщиками сырья.</p>
					</div>
					<div className="p-4 bg-white rounded-lg shadow-sm">
						<h3 className="font-semibold text-stone-800 mb-2">Сообщество</h3>
						<p className="text-sm text-stone-600">Поддерживаем это дружелюбное комьюнити.</p>
					</div>
				</div>
			</div>
		</section>
	);
}