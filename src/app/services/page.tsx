import CaseStudies from "../_partials/CaseStudies";
import OurPartnerships from "../_partials/OurPartnerships";
import LetUsBuild from "./_partials/LetUsBuild";
import OurServices from "./_partials/OurServices";
import ServicesHeroSection from "./_partials/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <OurServices />
      <OurPartnerships />
      <LetUsBuild />
    </div>
  );
};
export default ServicesPage;
