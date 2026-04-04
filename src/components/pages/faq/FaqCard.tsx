interface FaqCardProps {
	question: string;
	answer: string;
}

export function FaqCard({ question, answer }: FaqCardProps) {
	return (
		<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:border-amber-500 transition-all duration-300 h-full flex flex-col">
			<h3 className="text-lg font-semibold text-stone-800 mb-3">{question}</h3>
			<p className="text-sm text-stone-600 leading-relaxed flex-1">{answer}</p>
		</div>
	);
}