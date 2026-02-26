/**
 * @typedef {import("@/app/types/card").CardData} CardData
 * @typedef {import("@/app/types/home").HomeCategorySection} HomeCategorySection
 */

/**
 * Preserves first-seen category order while grouping cards.
 * @param {CardData[]} cards
 * @returns {HomeCategorySection[]}
 */
export function groupCardsByCategory(cards) {
  const map = new Map();

  for (const card of cards) {
    if (!map.has(card.category)) {
      map.set(card.category, []);
    }
    map.get(card.category).push(card);
  }

  return Array.from(map.entries()).map(([category, groupedCards]) => ({
    category,
    cards: groupedCards,
  }));
}

/**
 * Suggestion sort hook. Current default keeps grouped order.
 * @param {HomeCategorySection[]} sections
 * @returns {HomeCategorySection[]}
 */
export function sortCategoriesForSuggestion(sections) {
  return [...sections];
}
