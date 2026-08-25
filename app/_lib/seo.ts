import { siteConfig } from "../_data/siteConfig";

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteConfig.url}${cleanPath}`;
}
