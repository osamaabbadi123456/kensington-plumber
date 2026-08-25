import { siteConfig } from "../_data/siteConfig";

export function getWhatsAppUrl(message?: string) {
  const base = siteConfig.contact.whatsapp.baseUrl;

  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}
