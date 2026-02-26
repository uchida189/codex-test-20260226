import type { CardData } from "@/app/types/card";

type CardDetailsProps = {
  card: CardData;
};

export function CardDetails({ card }: CardDetailsProps) {
  return (
    <dl className="space-y-2 text-sm text-zinc-700">
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">詳細カテゴリ</dt>
        <dd>{card.detailCategory}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">場所</dt>
        <dd>
          <a
            href={card.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-zinc-400 underline-offset-2 hover:text-zinc-900"
          >
            {card.location}
          </a>
        </dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">カテゴリ</dt>
        <dd>{card.category}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">支払い</dt>
        <dd>{card.paymentMethods.join(" / ")}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">レビュー</dt>
        <dd>
          {card.reviewScore.toFixed(1)} / 5.0（{card.reviewCount}件）
        </dd>
      </div>
      <div className="flex gap-2">
        <dt className="w-24 shrink-0 font-medium text-zinc-900">料金</dt>
        <dd>{card.priceRange}</dd>
      </div>
    </dl>
  );
}
