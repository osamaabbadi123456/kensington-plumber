import type { Metadata } from "next";
import { CircleHelp, Droplets, Gauge, Heater, ShowerHead, Toilet, WashingMachine } from "lucide-react";
import HubPage from "../_components/HubPage";

export const metadata: Metadata = {
  title: "Plumbing Problems",
  description: "Find a clear starting point for a plumbing problem in Kensington.",
  alternates: { canonical: "/plumbing-problems" },
};

export default function PlumbingProblemsPage() {
  return <HubPage eyebrow="Start with the symptom" title="What is happening?" intro="You do not need to know the plumbing term. Choose the closest description and use it as a starting point for your enquiry." id="problem-list" items={[
    { title: "Water coming through the ceiling", description: "A ceiling stain, drip or water appearing below another room.", href: "/plumbing-problems/water-coming-through-ceiling", icon: Droplets },
    { title: "Toilet will not flush", description: "A flush, handle, button or cistern symptom that is not mainly a blockage.", href: "/plumbing-problems/toilet-wont-flush", icon: Toilet },
    { title: "Toilet keeps running", description: "A cistern that continues filling or water running into the pan.", href: "/plumbing-problems/toilet-keeps-running", icon: Toilet },
    { title: "Shower going hot and cold", description: "A shower temperature change with pressure, flow or fitting symptoms.", href: "/plumbing-problems/shower-going-hot-and-cold", icon: ShowerHead },
    { title: "Tap or sink", description: "Dripping taps, no water, slow drainage or under-sink leaks.", icon: WashingMachine },
    { title: "Water pressure", description: "Sudden pressure loss, weak taps or uneven water flow.", icon: Gauge },
    { title: "Heating or radiator", description: "Radiator leaks, cold spots, pressure or hot-water issues.", icon: Heater },
    { title: "Not sure", description: "Describe what you can see and use WhatsApp to send the enquiry.", icon: CircleHelp },
  ]} />;
}
