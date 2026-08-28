import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber South Kensington | Leaks, Toilets & Taps",
  description: "Need a plumber in South Kensington? Explore leak, bathroom, toilet and tap routes, then send the room, fixture and useful details.",
  alternates: { canonical: "/areas/south-kensington" },
};

export default function SouthKensingtonPage() { return <AreaPage area={areaPages["south-kensington"]} />; }
