"use client";

import AboutHerroSection from "@/app/about/_partials/AboutHerroSection";
import CompanyStatus from "@/app/about/_partials/CompanyStatus";
import JoinOurTeam from "@/app/about/_partials/JoinOurTeam";
import LeadershipTeam from "@/app/about/_partials/LeadershipTeam";
import MissionAndVision from "@/app/about/_partials/MissionAndVision";
import OurStory from "@/app/about/_partials/OurStory";
import OurValues from "@/app/about/_partials/OurValues";
import WhyChooseZenticsys from "@/app/about/_partials/WhyChooseZenticsys";
import { Button } from "@mui/material";
import NextLink from "next/link";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

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

      {/* Join Our Team CTA */}
      {/* <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to transform your business with innovative
            software or join our team of experts, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              component={NextLink}
              href="/schedule"
              endIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Start Your Project
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={NextLink}
              href="/career"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
