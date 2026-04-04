import { Clock, MapPin } from 'lucide-react';

export function ContactsInfo() {
	return (
		<section className="w-full py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h2 className="text-2xl font-bold text-stone-800 mb-6">Наш офис и производство</h2>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
								<div>
									<p className="font-medium text-stone-800">г. Москва, ул. Пивоваров, д. 1</p>
									<p className="text-sm text-stone-500">Вход со двора, 1 этаж</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Clock className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
								<div>
									<p className="font-medium text-stone-800">График работы:</p>
									<ul className="text-sm text-stone-600 space-y-1 mt-1">
										<li>Пн–Пт: 10:00 – 20:00</li>
										<li>Сб–Вс: 11:00 – 18:00</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
					
					{/* <div className="bg-stone-100 rounded-xl h-[400px] flex items-center justify-center border border-stone-200">
						<p className="text-stone-500 text-center px-4">
							Здесь будет интерактивная карта<br />
							<span className="text-sm opacity-70">(Яндекс.Карты / 2GIS)</span>
						</p>
					</div> */}
				</div>
			</div>
		</section>
	);
}