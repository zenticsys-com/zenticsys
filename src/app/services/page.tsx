import CaseStudies from "../_partials/CaseStudies";
import OurIndustryExpertise from "../_partials/OurIndustryExpertise";
import OurPartnerships from "../_partials/OurPartnerships";
import FAQSection from "./_partials/FAQSection";
import LetUsBuild from "./_partials/LetUsBuild";
import OurServices from "./_partials/OurServices";
import ServiceCtaSection from "./_partials/ServiceCtaSection";
import ServicesHeroSection from "./_partials/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <OurServices />
      <ServiceCtaSection />
      <OurIndustryExpertise />
      <OurPartnerships />
      <CaseStudies />
      <FAQSection />
      <LetUsBuild />
    </div>
  );
};
export default ServicesPage;
