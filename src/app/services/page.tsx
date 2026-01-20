import CaseStudies from "../_partials/CaseStudies";
import OurPartnerships from "../_partials/OurPartnerships";
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
      <OurPartnerships />
      <LetUsBuild />
    </div>
  );
};
export default ServicesPage;
