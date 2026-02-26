import { HomeCardRow } from "@/app/components/home/HomeCardRow";
import type { HomeCategorySection as HomeCategorySectionType } from "@/app/types/home";

type HomeCategorySectionProps = {
  section: HomeCategorySectionType;
  onToggleFavorite: (id: string) => void;
};

export function HomeCategorySection({
  section,
  onToggleFavorite,
}: HomeCategorySectionProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          {section.category}
        </h2>
        <p className="text-xs text-zinc-500">{section.cards.length}件</p>
      </div>

      <HomeCardRow cards={section.cards} onToggleFavorite={onToggleFavorite} />
    </section>
  );
}
