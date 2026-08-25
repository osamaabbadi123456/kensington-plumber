import type { MetadataRoute } from "next";
import { absoluteUrl } from "./_lib/seo";
import publicRoutes from "./_data/publicRoutes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({ url: absoluteUrl(path) }));
}
