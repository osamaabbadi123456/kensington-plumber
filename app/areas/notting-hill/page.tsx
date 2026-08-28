import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber in Notting Hill",
  description: "For a Notting Hill plumbing enquiry, start with the tap, basin, bathroom or shower fitting you can see and send useful symptom details.",
  alternates: { canonical: "/areas/notting-hill" },
};

export default function NottingHillPage() { return <AreaPage area={areaPages["notting-hill"]} />; }
