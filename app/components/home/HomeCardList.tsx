"use client";

import { useCallback, useMemo, useState } from "react";
import { HomeCategorySection } from "@/app/components/home/HomeCategorySection";
import { toggleFavoriteById } from "@/app/lib/cardInteractions.mjs";
import {
  groupCardsByCategory,
  sortCategoriesForSuggestion,
} from "@/app/lib/home/groupCardsByCategory.mjs";
import { initialCards } from "@/app/lib/mock/cards";
import type { CardData } from "@/app/types/card";

export function HomeCardList() {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const sections = useMemo(
    () => sortCategoriesForSuggestion(groupCardsByCategory(cards)),
    [cards],
  );

  const handleToggleFavorite = useCallback((id: string) => {
    setCards((prev) => toggleFavoriteById(prev, id));
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-10">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          カテゴリ別店舗サジェスト
        </h1>
        <p className="text-sm text-zinc-600">
          縦方向にカテゴリを並べ、カテゴリ内は横スクロールでカードを閲覧できます。
        </p>
      </header>

      <section className="space-y-10">
        {sections.map((section) => (
          <HomeCategorySection
            key={section.category}
            section={section}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </section>
    </main>
  );
}
