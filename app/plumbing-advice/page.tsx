import type { Metadata } from "next";
import { ClipboardList, Droplets, MessageCircle, Toilet } from "lucide-react";
import HubPage from "../_components/HubPage";

export const metadata: Metadata = {
  title: "Plumbing Advice",
  description: "Clear starting points for describing a plumbing problem.",
  alternates: { canonical: "/plumbing-advice" },
};

export default function PlumbingAdvicePage() {
  return (
    <HubPage
      eyebrow="Practical guidance"
      title="Useful advice before you send an enquiry."
      intro="These short guides help you describe a plumbing issue clearly without trying to diagnose it yourself."
      items={[
        {
          title: "Water coming through the ceiling",
          description: "What to check first, what to photograph and when to avoid electrics.",
          href: "/plumbing-advice/what-to-do-if-water-is-coming-through-your-ceiling",
          icon: Droplets,
        },
        {
          title: "Blocked toilet or broken flush",
          description: "How to tell whether the problem sounds like a blockage or a toilet fault.",
          href: "/plumbing-advice/blocked-toilet-or-broken-flush",
          icon: Toilet,
        },
        {
          title: "What details to send",
          description: "A simple structure for location, fixture, photos and the contact details you want to use.",
          href: "/plumbing-advice/what-details-to-send-for-a-plumbing-enquiry",
          icon: ClipboardList,
        },
        {
          title: "Send the enquiry",
          description: "Use WhatsApp once you have the room, the fixture and a useful photo ready.",
          icon: MessageCircle,
        },
      ]}
    />
  );
}
