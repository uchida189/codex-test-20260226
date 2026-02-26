import type {
  CardData,
  GooglePlace,
  GooglePlacePaymentOptions,
  GooglePlacePriceLevel,
  OpeningStatus,
} from "@/app/types/card";

const CLOSING_SOON_THRESHOLD_MINUTES = 60;

function parseDateTime(dateTime?: string) {
  if (!dateTime) {
    return null;
  }

  const parsed = new Date(dateTime);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}

function resolveOpeningStatus(place: GooglePlace): OpeningStatus {
  const openNow = place.currentOpeningHours?.openNow;
  if (!openNow) {
    return "closed";
  }

  const nextClose = parseDateTime(place.currentOpeningHours?.nextCloseTime);
  if (!nextClose) {
    return "open";
  }

  const diffMinutes = (nextClose.getTime() - Date.now()) / 60000;
  if (diffMinutes > 0 && diffMinutes <= CLOSING_SOON_THRESHOLD_MINUTES) {
    return "closingSoon";
  }

  return "open";
}

function formatPaymentMethods(paymentOptions?: GooglePlacePaymentOptions) {
  if (!paymentOptions) {
    return ["情報なし"];
  }

  const methods: string[] = [];
  if (paymentOptions.acceptsCreditCards) {
    methods.push("クレジット");
  }
  if (paymentOptions.acceptsDebitCards) {
    methods.push("デビット");
  }
  if (paymentOptions.acceptsNfc) {
    methods.push("タッチ決済");
  }
  if (paymentOptions.acceptsCashOnly) {
    methods.push("現金のみ");
  }

  if (methods.length === 0) {
    return ["情報なし"];
  }

  return methods;
}

function formatPriceLevel(priceLevel?: GooglePlacePriceLevel) {
  switch (priceLevel) {
    case "PRICE_LEVEL_FREE":
      return "無料";
    case "PRICE_LEVEL_INEXPENSIVE":
      return "1000円以下";
    case "PRICE_LEVEL_MODERATE":
      return "1000円〜3000円";
    case "PRICE_LEVEL_EXPENSIVE":
      return "3000円〜5000円";
    case "PRICE_LEVEL_VERY_EXPENSIVE":
      return "5000円以上";
    default:
      return "不明";
  }
}

function formatMapUrl(place: GooglePlace) {
  if (place.googleMapsUri) {
    return place.googleMapsUri;
  }

  const q = place.displayName?.text ?? place.formattedAddress ?? place.id;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export function mapGooglePlaceToCard(
  place: GooglePlace,
  options?: { imageUrl?: string; isFavorited?: boolean },
): CardData {
  return {
    id: place.id,
    name: place.displayName?.text ?? place.id,
    openingStatus: resolveOpeningStatus(place),
    imageUrl: options?.imageUrl ?? "/window.svg",
    detailCategory:
      place.primaryTypeDisplayName?.text ?? place.primaryType ?? "カテゴリ情報なし",
    location: place.formattedAddress ?? "住所情報なし",
    mapUrl: formatMapUrl(place),
    category: place.primaryTypeDisplayName?.text ?? place.primaryType ?? "未分類",
    paymentMethods: formatPaymentMethods(place.paymentOptions),
    reviewScore: place.rating ?? 0,
    reviewCount: place.userRatingCount ?? 0,
    priceRange: formatPriceLevel(place.priceLevel),
    isFavorited: options?.isFavorited ?? false,
  };
}
