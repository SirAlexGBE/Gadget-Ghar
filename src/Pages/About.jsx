import React from "react";
import AboutHeader from "../Components/About/About-header";
import VisionMission from "../Components/About/VisionMission";
import ServicesSection from "../Components/About/ServicesSection";
import ContactSection from "../Components/About/ContactSection";
import LocationSection from "../Components/About/LocationSection";

export default function About() {
  return (
    <>
      <AboutHeader />
      <VisionMission />
      <div id="service">
        <ServicesSection />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div id="contact">
          <ContactSection />
        </div>
        <div id="locate">
          <LocationSection />
        </div>
      </div>
    </>
  );
}
