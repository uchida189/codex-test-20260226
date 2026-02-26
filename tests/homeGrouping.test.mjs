import test from "node:test";
import assert from "node:assert/strict";
import {
  groupCardsByCategory,
  sortCategoriesForSuggestion,
} from "../app/lib/home/groupCardsByCategory.mjs";

const cards = [
  { id: "1", category: "ラーメン", isFavorited: false },
  { id: "2", category: "中華そば", isFavorited: false },
  { id: "3", category: "ラーメン", isFavorited: true },
];

test("groupCardsByCategory groups cards by category", () => {
  const grouped = groupCardsByCategory(cards);

  assert.equal(grouped.length, 2);
  assert.equal(grouped[0].category, "ラーメン");
  assert.equal(grouped[0].cards.length, 2);
  assert.equal(grouped[1].category, "中華そば");
  assert.equal(grouped[1].cards.length, 1);
});

test("groupCardsByCategory keeps first-seen category order", () => {
  const grouped = groupCardsByCategory(cards);
  assert.deepEqual(
    grouped.map((s) => s.category),
    ["ラーメン", "中華そば"],
  );
});

test("sortCategoriesForSuggestion returns a copied array", () => {
  const grouped = groupCardsByCategory(cards);
  const sorted = sortCategoriesForSuggestion(grouped);

  assert.deepEqual(sorted, grouped);
  assert.notEqual(sorted, grouped);
});
