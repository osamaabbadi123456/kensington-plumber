import { absoluteUrl } from "../_lib/seo";
import { siteConfig } from "../_data/siteConfig";

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

const organisationId = `${siteConfig.url}/#organisation`;

function JsonLd({ data }: { data: JsonLdValue }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function SiteStructuredData() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            name: siteConfig.name,
            url: siteConfig.url,
            inLanguage: "en-GB",
            publisher: { "@id": organisationId },
          },
          {
            "@type": "Organization",
            "@id": organisationId,
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.contact.email,
          },
        ],
      }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}

export function ServiceStructuredData({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: absoluteUrl(path),
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      }}
    />
  );
}

export function WebPageStructuredData({
  name,
  description,
  path,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        description,
        url,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        ...(dateModified ? { dateModified } : {}),
      }}
    />
  );
}

export function AdvicePageStructuredData(props: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return <WebPageStructuredData {...props} />;
}
