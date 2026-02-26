import test from "node:test";
import assert from "node:assert/strict";
import {
  shouldTriggerDoubleTap,
  toggleFavoriteById,
} from "../app/lib/cardInteractions.mjs";

test("shouldTriggerDoubleTap returns true when taps are within threshold", () => {
  const result = shouldTriggerDoubleTap(1000, 750, 300);
  assert.equal(result, true);
});

test("shouldTriggerDoubleTap returns false when over threshold", () => {
  const result = shouldTriggerDoubleTap(1000, 600, 300);
  assert.equal(result, false);
});

test("toggleFavoriteById toggles only target card", () => {
  const cards = [
    { id: "a", isFavorited: false },
    { id: "b", isFavorited: true },
  ];

  const updated = toggleFavoriteById(cards, "a");

  assert.equal(updated[0].isFavorited, true);
  assert.equal(updated[1].isFavorited, true);
  assert.notEqual(updated, cards);
});
