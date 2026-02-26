export type OpeningStatus = "open" | "closingSoon" | "closed";

export type GooglePlaceLocalizedText = {
  text: string;
  languageCode?: string;
};

export type GooglePlacePaymentOptions = {
  acceptsCreditCards?: boolean;
  acceptsDebitCards?: boolean;
  acceptsCashOnly?: boolean;
  acceptsNfc?: boolean;
};

export type GooglePlaceOpeningHours = {
  openNow?: boolean;
  nextCloseTime?: string;
  nextOpenTime?: string;
};

export type GooglePlacePriceLevel =
  | "PRICE_LEVEL_FREE"
  | "PRICE_LEVEL_INEXPENSIVE"
  | "PRICE_LEVEL_MODERATE"
  | "PRICE_LEVEL_EXPENSIVE"
  | "PRICE_LEVEL_VERY_EXPENSIVE"
  | string;

export type GooglePlace = {
  name: string;
  id: string;
  displayName?: GooglePlaceLocalizedText;
  formattedAddress?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  googleMapsUri?: string;
  primaryType?: string;
  primaryTypeDisplayName?: GooglePlaceLocalizedText;
  currentOpeningHours?: GooglePlaceOpeningHours;
  rating?: number;
  userRatingCount?: number;
  priceLevel?: GooglePlacePriceLevel;
  paymentOptions?: GooglePlacePaymentOptions;
};

export type CardData = {
  id: string;
  name: string;
  openingStatus: OpeningStatus;
  imageUrl: string;
  detailCategory: string;
  location: string;
  mapUrl: string;
  category: string;
  paymentMethods: string[];
  reviewScore: number;
  reviewCount: number;
  priceRange: string;
  isFavorited: boolean;
};

export type CardProps = {
  card: CardData;
  onToggleFavorite: (id: string) => void;
};
