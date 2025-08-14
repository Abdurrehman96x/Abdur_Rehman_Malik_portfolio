"use client";

import Homepage from "@/components/Homepage";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";
import ContactPage from "./contact/page";

export default function MainPage() {
  return (
    <main className="scroll-smooth ">
      {" "}
      <section id="home" className="snap-start h-screen bg-blue-200">
        <Homepage />
      </section>
      <section id="about" className="snap-start h-screen bg-blue-200">
        <AboutPage />
      </section>
      <section id="portfolio" className="min-h-screen bg-blue-200">
        <PortfolioPage />
      </section>
      <section id="contact" className="min-h-screen bg-blue-200">
        <ContactPage />
      </section>
    </main>
  );
}
