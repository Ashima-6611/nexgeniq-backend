import React from "react";
import Hero from "../components/Hero.jsx";
import WhySection from "../components/WhySection.jsx";
import Courses from "../components/Courses.jsx";
import RoadMap from "../components/RoadMap.jsx";
import DemoSection from "../components/DemoSection.jsx";
import { Testimonials, CTASection } from "../components/CTASection.jsx";

const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <WhySection />
      <Courses />
      <RoadMap />
      <DemoSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default LandingPage;
