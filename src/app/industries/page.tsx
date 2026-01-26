import AutomotiveIndustrySolutions from "@/app/industries/_partials/AutomotiveIndustrySolutions";
import ClientSuccessStories from "@/app/industries/_partials/ClientSuccessStories";
import SeeYourIndustry from "@/app/industries/_partials/SeeYourIndustry";
import IndustriesHeroSection from "./_partials/IndustriesHeroSection";
import OurIndustryExpertise from "../_partials/OurIndustryExpertise";
import FAQSection from "./_partials/FAQSection";
const IndustriesPage = () => {
  return (
    <div>
      <IndustriesHeroSection />
      <OurIndustryExpertise />
      <AutomotiveIndustrySolutions />
      <ClientSuccessStories />
      <FAQSection />
      <SeeYourIndustry />
    </div>
  );
};

export default IndustriesPage;
