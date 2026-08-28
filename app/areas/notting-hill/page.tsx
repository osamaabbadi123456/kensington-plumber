import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber Notting Hill | Taps, Bathrooms & Showers",
  description: "Need a plumber in Notting Hill? Start with the tap, basin, bathroom or shower fitting you can see, then send useful symptom details.",
  alternates: { canonical: "/areas/notting-hill" },
};

export default function NottingHillPage() { return <AreaPage area={areaPages["notting-hill"]} />; }
