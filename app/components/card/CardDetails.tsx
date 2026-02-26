import type { CardData } from "@/app/types/card";

type CardDetailsProps = {
  card: CardData;
};

export function CardDetails({ card }: CardDetailsProps) {
  return (
    <dl className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">詳細カテゴリ</dt>
        <dd>{card.detailCategory}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">場所</dt>
        <dd>
          <a
            href={card.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-zinc-400 underline-offset-2 hover:text-zinc-900 dark:decoration-zinc-500 dark:hover:text-zinc-100"
          >
            {card.location}
          </a>
        </dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">カテゴリ</dt>
        <dd>{card.category}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">支払い</dt>
        <dd>{card.paymentMethods.join(" / ")}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">レビュー</dt>
        <dd>
          {card.reviewScore.toFixed(1)} / 5.0（{card.reviewCount}件）
        </dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">料金</dt>
        <dd>{card.priceRange}</dd>
      </div>
    </dl>
  );
}
