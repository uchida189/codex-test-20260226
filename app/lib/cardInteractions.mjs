/**
 * Returns true when the current tap qualifies as a double tap.
 */
export function shouldTriggerDoubleTap(now, lastTapAt, thresholdMs = 300) {
  if (!lastTapAt) {
    return false;
  }
  return now - lastTapAt < thresholdMs;
}

/**
 * Immutable helper for toggling favorite state by card id.
 */
export function toggleFavoriteById(cards, id) {
  return cards.map((card) =>
    card.id === id ? { ...card, isFavorited: !card.isFavorited } : card,
  );
}
