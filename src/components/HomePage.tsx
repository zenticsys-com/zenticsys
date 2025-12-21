"use client";

import CallSchedule from "@/app/_partials/CallSchedule";
import ClientReviews from "@/app/_partials/ClientReviews";
import FeaturedWorks from "@/app/_partials/FeaturedWorks";
import HeroSection from "@/app/_partials/HeroSection";
import LatestfromOurBlog from "@/app/_partials/LatestfromOurBlog";
import OurIndustryExpertise from "@/app/_partials/OurIndustryExpertise";
import OurPartnerships from "@/app/_partials/OurPartnerships";
import TheTechnologyWeUse from "@/app/_partials/TheTechnologyWeUse";
import WhatWeAreSection from "@/app/_partials/WhatWeAreSection";
import WhatWeDoSection from "@/app/_partials/WhatWeDoSection";
import { Button } from "@mui/material";
import NextLink from "next/link";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurPartnerships />
      <WhatWeAreSection />
      <WhatWeDoSection />
      <OurIndustryExpertise />
      <TheTechnologyWeUse />
      <FeaturedWorks />
      <ClientReviews />
      <LatestfromOurBlog />
      <CallSchedule />
    </div>
  );
}
