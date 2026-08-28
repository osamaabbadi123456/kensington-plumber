import type { MetadataRoute } from "next";
import { absoluteUrl } from "./_lib/seo";
import { isNetlifyPreview } from "./_lib/deployment";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isNetlifyPreview
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: isNetlifyPreview ? undefined : absoluteUrl("/sitemap.xml"),
  };
}
