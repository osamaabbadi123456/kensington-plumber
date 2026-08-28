import type { Metadata } from "next";
import AreaPage from "../../_components/AreaPage";
import { areaPages } from "../../_data/areaPages";

export const metadata: Metadata = {
  title: "Plumber West Kensington | Pipework, Toilets & Bathrooms",
  description: "Need a plumber in West Kensington? Compare visible pipework leaks, toilet symptoms and bathroom fixtures, then send clear details.",
  alternates: { canonical: "/areas/west-kensington" },
};

export default function WestKensingtonPage() { return <AreaPage area={areaPages["west-kensington"]} />; }
