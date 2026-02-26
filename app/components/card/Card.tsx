"use client";

import { useRef } from "react";
import { CardDetails } from "@/app/components/card/CardDetails";
import { CardHeader } from "@/app/components/card/CardHeader";
import { CardMedia } from "@/app/components/card/CardMedia";
import { shouldTriggerDoubleTap } from "@/app/lib/cardInteractions.mjs";
import type { CardProps } from "@/app/types/card";

const DOUBLE_TAP_THRESHOLD_MS = 300;
const openingStatusMap = {
  open: {
    label: "営業中",
    className: "border-green-300 bg-green-100 text-green-900 dark:border-green-700 dark:bg-green-950/60 dark:text-green-200",
  },
  closingSoon: {
    label: "まもなく営業終了",
    className: "border-orange-300 bg-orange-100 text-orange-900 dark:border-orange-700 dark:bg-orange-950/60 dark:text-orange-200",
  },
  closed: {
    label: "営業時間外",
    className: "border-red-300 bg-red-100 text-red-900 dark:border-red-700 dark:bg-red-950/60 dark:text-red-200",
  },
} as const;

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("button, a, input, select, textarea, [role='button']"));
}

export function Card({ card, onToggleFavorite }: CardProps) {
  const lastTouchAt = useRef(0);
  const openingStatus = openingStatusMap[card.openingStatus];

  const toggleFavorite = () => {
    onToggleFavorite(card.id);
  };

  const onCardDoubleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isInteractiveTarget(event.target)) {
      return;
    }
    toggleFavorite();
  };

  const onCardTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (isInteractiveTarget(event.target)) {
      return;
    }

    const now = Date.now();
    if (shouldTriggerDoubleTap(now, lastTouchAt.current, DOUBLE_TAP_THRESHOLD_MS)) {
      toggleFavorite();
      lastTouchAt.current = 0;
      return;
    }

    lastTouchAt.current = now;
  };

  return (
    <article
      onDoubleClick={onCardDoubleClick}
      onTouchEnd={onCardTouchEnd}
      className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <CardHeader
        name={card.name}
        isFavorited={card.isFavorited}
        onToggleFavorite={toggleFavorite}
      />

      <p
        className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${openingStatus.className}`}
      >
        {openingStatus.label}
      </p>

      <CardMedia name={card.name} imageUrl={card.imageUrl} />
      <CardDetails card={card} />
    </article>
  );
}
