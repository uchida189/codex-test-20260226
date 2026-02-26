import { Card } from "@/app/components/card/Card";
import type { CardData } from "@/app/types/card";

type HomeCardRowProps = {
  cards: CardData[];
  onToggleFavorite: (id: string) => void;
};

export function HomeCardRow({ cards, onToggleFavorite }: HomeCardRowProps) {
  return (
    <div className="flex gap-4 overflow-x-auto overscroll-x-contain pb-2 snap-x snap-mandatory">
      {cards.map((card) => (
        <div key={card.id} className="w-[320px] md:w-[360px] shrink-0 snap-start">
          <Card card={card} onToggleFavorite={onToggleFavorite} />
        </div>
      ))}
    </div>
  );
}
