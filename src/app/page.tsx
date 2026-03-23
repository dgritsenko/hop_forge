import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
      <h1 className="text-4xl font-bold text-beer-700">Hop Forge 🍺</h1>
      
      {/* Кнопка с первичным стилем */}
      <Button>Обычная кнопка</Button>
      
      {/* Кнопка с явным вариантом */}
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      
      {/* Кнопка с кастомным классом */}
      <Button className="bg-beer-500 hover:bg-beer-700 text-white">
        Пивная кнопка 🍻
      </Button>
    </main>
  );
}