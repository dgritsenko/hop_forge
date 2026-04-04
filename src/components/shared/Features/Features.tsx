'use client';

import { Cpu, Leaf, Truck, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Feature } from '@/lib/mocks/features';

interface FeaturesProps {
	features: Feature[];
	className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
	cpu: <Cpu className="w-8 h-8" />,
	leaf: <Leaf className="w-8 h-8" />,
	truck: <Truck className="w-8 h-8" />,
	save: <Save className="w-8 h-8" />,
};

export function Features({ features, className = '' }: FeaturesProps) {
	return (
		<section className={`w-full py-16 bg-stone-100 ${className}`}>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-3">
						Почему Хмельная Кузня?
					</h2>
					<p className="text-stone-600 max-w-xl mx-auto">
						Мы делаем процесс создания пива простым и доступным для каждого
					</p>
				</div>
				
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{features.map((feature) => (
						<div
							key={feature.id}
							className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
								{iconMap[feature.icon] || <Cpu className="w-8 h-8" />}
							</div>
							
							<h3 className="text-lg font-semibold text-stone-800 mb-2">
								{feature.title}
							</h3>
							
							<p className="text-sm text-stone-600 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
				
			</div>
		</section>
	);
}