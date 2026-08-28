import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber Earl's Court | Leaks, Ceilings & Toilets",
  description: "Need a plumber in Earl's Court? Start with ceiling water, leak or toilet symptoms, then send the room, location and useful details.",
  alternates: { canonical: "/areas/earls-court" },
};

export default function EarlsCourtPage() { return <AreaPage area={areaPages["earls-court"]} />; }
