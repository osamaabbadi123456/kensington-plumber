import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer";
import MobileConversionDock from "./_components/MobileConversionDock";
import { SiteStructuredData } from "./_components/StructuredData";
import { siteConfig } from "./_data/siteConfig";
import { isNetlifyPreview } from "./_lib/deployment";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Plumber Kensington | Plumbing Enquiries in W8",
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
    title: "Plumber Kensington | Plumbing Enquiries in W8",
    description: siteConfig.description,
  },

  robots: {
    index: !isNetlifyPreview,
    follow: !isNetlifyPreview,
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
        <Footer />
        <MobileConversionDock />
      </body>
    </html>
  );
}
