import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in Holland Park",
  description: "For a Holland Park plumbing enquiry, include the postcode and choose a leak, shower, bathroom or toilet symptom route before sending details.",
  alternates: { canonical: "/areas/holland-park" },
};

export default function HollandParkPage() { return <AreaPage area={areaPages["holland-park"]} />; }
