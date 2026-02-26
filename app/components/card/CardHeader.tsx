type CardHeaderProps = {
  name: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
};

export function CardHeader({
  name,
  isFavorited,
  onToggleFavorite,
}: CardHeaderProps) {
  const buttonColorClass = isFavorited
    ? "border-pink-300 bg-pink-50 text-pink-800 hover:bg-pink-100 dark:border-pink-700 dark:bg-pink-950/60 dark:text-pink-200 dark:hover:bg-pink-900/70"
    : "border-zinc-300 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800";

  return (
    <header className="flex items-start justify-between gap-3">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {name}
      </h2>
      <button
        type="button"
        data-heart-button
        aria-label={isFavorited ? "お気に入り解除" : "お気に入り追加"}
        aria-pressed={isFavorited}
        onClick={onToggleFavorite}
        className={`rounded-full border px-3 py-1 text-xl leading-none transition ${buttonColorClass}`}
      >
        {isFavorited ? "❤" : "♡"}
      </button>
    </header>
  );
}
