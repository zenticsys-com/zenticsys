import AutomotiveIndustrySolutions from "@/app/industries/_partials/AutomotiveIndustrySolutions";
import ClientSuccessStories from "@/app/industries/_partials/ClientSuccessStories";
import IndustriesHeroSection from "./_partials/IndustriesHeroSection";
import FAQSection from "./_partials/FAQSection";
import OurIndustries from "./_partials/OurIndustries";
import CallSchedule from "../_partials/CallSchedule";
const IndustriesPage = () => {
  return (
    <div>
      <IndustriesHeroSection />
      <OurIndustries />
      <AutomotiveIndustrySolutions />
      <ClientSuccessStories />
      <FAQSection />
      <CallSchedule />
    </div>
  );
};

export default IndustriesPage;
