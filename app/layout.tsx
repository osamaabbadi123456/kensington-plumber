import type { Metadata } from "next";
import "./globals.css";
import { SiteStructuredData } from "./_components/StructuredData";
import { siteConfig } from "./_data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Plumber Kensington | Local Plumbing Enquiries",
    template: "%s | Plumber Kensington",
  },

  description: siteConfig.description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Plumber Kensington | Local Plumbing Enquiries",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <SiteStructuredData />
        {children}
      </body>
    </html>
  );
}
