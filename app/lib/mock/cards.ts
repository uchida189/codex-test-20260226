import { mapGooglePlaceToCard } from "@/app/lib/googlePlaceAdapter";
import type { CardData, GooglePlace } from "@/app/types/card";

const closingSoonDateTime = new Date(Date.now() + 30 * 60 * 1000).toISOString();

const mockPlaces: GooglePlace[] = [
  {
    name: "places/mock-place-001",
    id: "mock-place-001",
    displayName: { text: "麺処 みなと", languageCode: "ja" },
    formattedAddress: "東京都渋谷区道玄坂1-1-1",
    location: { latitude: 35.6595, longitude: 139.7005 },
    googleMapsUri: "https://maps.google.com/?cid=1111111111111111111",
    primaryType: "ramen_restaurant",
    primaryTypeDisplayName: { text: "ラーメン" },
    currentOpeningHours: {
      openNow: true,
      nextCloseTime: "2099-12-31T23:00:00+09:00",
    },
    paymentOptions: {
      acceptsCreditCards: true,
      acceptsNfc: true,
    },
    rating: 4.3,
    userRatingCount: 128,
    priceLevel: "PRICE_LEVEL_INEXPENSIVE",
  },
  {
    name: "places/mock-place-002",
    id: "mock-place-002",
    displayName: { text: "豚骨一番", languageCode: "ja" },
    formattedAddress: "東京都新宿区西新宿1-2-3",
    location: { latitude: 35.6904, longitude: 139.6993 },
    googleMapsUri: "https://maps.google.com/?cid=2222222222222222222",
    primaryType: "ramen_restaurant",
    primaryTypeDisplayName: { text: "ラーメン" },
    currentOpeningHours: {
      openNow: false,
    },
    paymentOptions: {
      acceptsCashOnly: true,
    },
    rating: 4.0,
    userRatingCount: 95,
    priceLevel: "PRICE_LEVEL_INEXPENSIVE",
  },
  {
    name: "places/mock-place-003",
    id: "mock-place-003",
    displayName: { text: "あっさり中華そば 風", languageCode: "ja" },
    formattedAddress: "東京都豊島区南池袋1-1-1",
    location: { latitude: 35.7289, longitude: 139.7101 },
    googleMapsUri: "https://maps.google.com/?cid=3333333333333333333",
    primaryType: "noodle_shop",
    primaryTypeDisplayName: { text: "中華そば" },
    currentOpeningHours: {
      openNow: true,
      nextCloseTime: closingSoonDateTime,
    },
    paymentOptions: {
      acceptsCreditCards: true,
      acceptsDebitCards: true,
      acceptsNfc: true,
    },
    rating: 4.6,
    userRatingCount: 210,
    priceLevel: "PRICE_LEVEL_MODERATE",
  },
];

const fallbackImages = ["/window.svg", "/globe.svg", "/file.svg"];

export const initialCards: CardData[] = mockPlaces.map((place, index) =>
  mapGooglePlaceToCard(place, {
    imageUrl: fallbackImages[index % fallbackImages.length],
    isFavorited: index === 1,
  }),
);
