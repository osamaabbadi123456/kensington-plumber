import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber Holland Park | Leaks, Showers & Toilets",
  description: "Need a plumber in Holland Park? Include the postcode and choose a leak, shower, bathroom or toilet route before sending details.",
  alternates: { canonical: "/areas/holland-park" },
};

export default function HollandParkPage() { return <AreaPage area={areaPages["holland-park"]} />; }
