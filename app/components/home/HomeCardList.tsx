"use client";

import { useCallback, useState } from "react";
import { Card } from "@/app/components/card/Card";
import { toggleFavoriteById } from "@/app/lib/cardInteractions.mjs";
import { initialCards } from "@/app/lib/mock/cards";
import type { CardData } from "@/app/types/card";

export function HomeCardList() {
  const [cards, setCards] = useState<CardData[]>(initialCards);

  const handleToggleFavorite = useCallback((id: string) => {
    setCards((prev) => toggleFavoriteById(prev, id));
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-10">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">店舗カード一覧</h1>
        <p className="text-sm text-zinc-600">
          仕様優先順に沿って、店名・ハート・営業状態・画像・詳細情報を表示します。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} card={card} onToggleFavorite={handleToggleFavorite} />
        ))}
      </section>
    </main>
  );
}
