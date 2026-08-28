import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in North Kensington",
  description: "For a North Kensington plumbing enquiry, identify the visible toilet, tap or pipework symptom, then send clear location and fixture details.",
  alternates: { canonical: "/areas/north-kensington" },
};

export default function NorthKensingtonPage() { return <AreaPage area={areaPages["north-kensington"]} />; }
