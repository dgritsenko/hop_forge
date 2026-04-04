import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutCTA() {
	return (
		<section className="w-full py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-center">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
					Готовы сварить свой первый рецепт?
				</h2>
				<p className="text-stone-300 max-w-xl mx-auto mb-8">
					Тогда зарегистрируйтесть и начните свой путь в мире ПИВА!
				</p>
				<Link href="/auth/registration">
					<Button size="lg" className="px-8 py-6 text-lg bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300">
						Зарегистрироваться
					</Button>
				</Link>
			</div>
		</section>
	);
}