import CallSchedule from "@/app/_partials/CallSchedule";
import ClientReviews from "@/app/_partials/ClientReviews";
import HeroSection from "@/app/_partials/HeroSection";
import OurIndustryExpertise from "@/app/_partials/OurIndustryExpertise";
import OurPartnerships from "@/app/_partials/OurPartnerships";
import TheTechnologyWeUse from "@/app/_partials/TheTechnologyWeUse";
import WhatWeAreSection from "@/app/_partials/WhatWeAreSection";
import WhatWeDoSection from "@/app/_partials/WhatWeDoSection";
import CaseStudies from "./_partials/CaseStudies";
import FAQSection from "./_partials/FAQSection";
import LatestFromOurBlog from "./_partials/LatestFromOurBlog";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurPartnerships />
      <WhatWeAreSection />
      <WhatWeDoSection />
      <OurIndustryExpertise />
      <CaseStudies />
      <TheTechnologyWeUse />
      <ClientReviews />
      <LatestFromOurBlog />
      <FAQSection />
      <CallSchedule />
    </div>
  );
};
export default HomePage;
