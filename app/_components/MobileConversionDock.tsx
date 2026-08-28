"use client";

import Link from "next/link";
import { ClipboardPenLine } from "lucide-react";
import { usePathname } from "next/navigation";
import { getEnquiryBuilderHref, getMobileDockMessage } from "../_data/internalLinks";
import { getWhatsAppUrl } from "../_lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileConversionDock() {
  const pathname = usePathname() ?? "/";
  const builderHref = getEnquiryBuilderHref(pathname);

  return (
    <nav className="mobile-conversion-dock" aria-label="Quick enquiry actions">
      <Link className="mobile-dock-builder" href={builderHref} aria-label="Build enquiry — build a guided plumbing enquiry">
        <ClipboardPenLine size={19} aria-hidden="true" />
        <span>Build enquiry</span>
      </Link>
      <a
        className="mobile-dock-whatsapp"
        href={getWhatsAppUrl(getMobileDockMessage(pathname))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp — send a plumbing enquiry on WhatsApp"
      >
        <span className="mobile-dock-whatsapp-icon"><WhatsAppIcon size={20} /></span>
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
