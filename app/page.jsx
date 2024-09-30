import Choose from "./components/Choose";
import Hero from "./components/home/Hero";
import Contact from "./components/HomeContact";
import News from "./components/News";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Us from "./components/Us";
import We from "./components/We";
import { Metadata } from "next";

export const metadata = {
  title: "PEINSO: Offshore/Onshore survey services | Home", // Enhanced title
  description:
    "PEINSO offers comprehensive Offshore/Onshore survey services solutions tailored to your business needs. Get a free quote today.", // More descriptive content
  keywords: [
"Offshore survey services",
"Onshore survey services",
"Offshore and onshore surveys",
"Marine survey services",
"Land survey services",
"Geophysical survey services",
"Hydrographic survey services",
"Topographic survey services",
"Seismic survey services",
"Environmental survey services",
"Offshore geophysical surveys",
"Onshore geotechnical surveys",
"Subsea survey services",
"Bathymetric survey services",
"Pipeline survey services",
"Coastal survey services",
"Marine seismic surveys",
"Aerial survey services",
"Construction survey services",
"Rig positioning survey services",
"Oil and gas survey services",
"Renewable energy survey services",
"Offshore wind farm surveys",
"Pipeline integrity surveys",
"Coastal engineering surveys",
"Marine construction surveys",
"Environmental impact assessment surveys",
"Offshore drilling surveys",
"Infrastructure survey services",
"Offshore exploration surveys",
"Offshore survey services in middle east",
"Onshore survey services in middle east",
"middle east marine survey services",
"[Country] offshore survey companies",
"Best survey services in Egypt and middle east",
"Reliable offshore survey services near me",
"Top onshore survey companies",
"Affordable marine survey services",
"Offshore wind farm survey experts",
"Professional hydrographic survey services",
    "PEINSO",
  ], // Consolidated and relevant keywords
  authors: [{ name: "PEINSO" }],
  creator: "PEINSO",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-24 ">
      <Hero />
      <We />
      <Us />
      <Projects />
      <Testimonial />
      <Contact />
      <Choose />
      <News />
    </main>
  );
}
