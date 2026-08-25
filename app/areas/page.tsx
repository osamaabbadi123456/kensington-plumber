import type { Metadata } from "next";
import { CircleHelp, MapPin, Wrench } from "lucide-react";
import HubPage from "../_components/HubPage";

export const metadata: Metadata = {
  title: "Plumbing Enquiries in Kensington and W8",
  description: "Understand the confirmed Kensington and W8 focus for this local plumbing enquiry website, then choose a service or symptom route.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <HubPage
      eyebrow="Confirmed local focus"
      title="Plumbing enquiries for Kensington, London."
      intro="This website currently publishes local plumbing enquiry information for Kensington, with W8 as its primary postcode intent. It does not claim a local office or separate coverage pages for neighbouring districts."
      items={[
        {
          title: "Kensington and W8",
          description: "Use this site to describe a plumbing issue in Kensington and include W8 where it is relevant to the enquiry.",
          icon: MapPin,
        },
        {
          title: "Choose a service",
          description: "Go to the services hub for leaks, toilets, taps, bathrooms, showers and urgent plumbing situations.",
          href: "/services",
          icon: Wrench,
        },
        {
          title: "Start with the symptom",
          description: "If the service name is unclear, use the plumbing problems hub to describe what you can see first.",
          href: "/plumbing-problems",
          icon: CircleHelp,
        },
      ]}
    />
  );
}
