export const coveredAreas = [
  { key: "kensington-w8", label: "Kensington / W8", postcode: "W8", detail: "Primary local focus.", pagePath: undefined },
  { key: "south-kensington", label: "South Kensington", postcode: "SW7", detail: "Room and fixture details.", pagePath: "/areas/south-kensington" },
  { key: "west-kensington", label: "West Kensington", postcode: "W14", detail: "Pipework or toilet symptom.", pagePath: "/areas/west-kensington" },
  { key: "earls-court", label: "Earl's Court", postcode: "SW5", detail: "Water-from-above context.", pagePath: "/areas/earls-court" },
  { key: "notting-hill", label: "Notting Hill", postcode: "W11", detail: "Fitting-led route.", pagePath: "/areas/notting-hill" },
  { key: "north-kensington", label: "North Kensington", postcode: "W10", detail: "Visible symptom route.", pagePath: "/areas/north-kensington" },
  { key: "holland-park", label: "Holland Park", postcode: "W8 / W11", detail: "Include the actual postcode.", pagePath: "/areas/holland-park" },
] as const;

export type CoveredAreaKey = (typeof coveredAreas)[number]["key"];

export const locationOptions = [
  ...coveredAreas.map((area) => area.label),
  "Other London area / postcode",
] as const;

export function getCoveredArea(value: string | null | undefined) {
  return coveredAreas.find((area) => area.key === value);
}

export function getLocationOption(value: string | null | undefined) {
  return getCoveredArea(value)?.label ?? "";
}

export function getAreaEnquiryHref(area: CoveredAreaKey) {
  return `/contact?location=${area}#build-enquiry`;
}

export function getAreaLearningHref(area: CoveredAreaKey) {
  return getCoveredArea(area)?.pagePath ?? "/#area-coverage-home-title";
}
