import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber North Kensington | Toilets, Taps & Pipework",
  description: "Need a plumber in North Kensington? Identify the visible toilet, tap or pipework symptom, then send clear location and fixture details.",
  alternates: { canonical: "/areas/north-kensington" },
};

export default function NorthKensingtonPage() { return <AreaPage area={areaPages["north-kensington"]} />; }
