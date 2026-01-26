import HeroSection from "@/app/_partials/HeroSection";
import OurPartnerships from "@/app/_partials/OurPartnerships";
import WhatWeAreSection from "@/app/_partials/WhatWeAreSection";
import WhatWeDoSection from "@/app/_partials/WhatWeDoSection";
import OurIndustryExpertise from "@/app/_partials/OurIndustryExpertise";
import CaseStudies from "./_partials/CaseStudies";
import TheTechnologyWeUse from "@/app/_partials/TheTechnologyWeUse";
import FeaturedWorks from "@/app/_partials/FeaturedWorks";
import ClientReviews from "@/app/_partials/ClientReviews";
import LatestFromOurBlog from "./_partials/LatestFromOurBlog";
import FAQSection from "./_partials/FAQSection";
import CallSchedule from "@/app/_partials/CallSchedule";

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
      {/* <FeaturedWorks /> */}
      <ClientReviews />
      <LatestFromOurBlog />
      <FAQSection />
      <CallSchedule />
    </div>
  );
};
export default HomePage;
