"use client";

import AboutHerroSection from "@/app/about/_partials/AboutHerroSection";
import CompanyStatus from "@/app/about/_partials/CompanyStatus";
import JoinOurTeam from "@/app/about/_partials/JoinOurTeam";
import LeadershipTeam from "@/app/about/_partials/LeadershipTeam";
import MissionAndVision from "@/app/about/_partials/MissionAndVision";
import OurStory from "@/app/about/_partials/OurStory";
import OurValues from "@/app/about/_partials/OurValues";
import WhyChooseZenticsys from "@/app/about/_partials/WhyChooseZenticsys";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHerroSection />
      <CompanyStatus />
      <MissionAndVision />
      <OurStory />
      <LeadershipTeam />
      <OurValues />
      <WhyChooseZenticsys />
      <JoinOurTeam />
    </div>
  );
}
