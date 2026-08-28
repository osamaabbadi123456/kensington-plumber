import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in South Kensington",
  description: "For a South Kensington plumbing enquiry, start with a bathroom, tap, toilet or leak symptom, then send the room and fixture details.",
  alternates: { canonical: "/areas/south-kensington" },
};

export default function SouthKensingtonPage() { return <AreaPage area={areaPages["south-kensington"]} />; }
