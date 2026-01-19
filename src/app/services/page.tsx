import CaseStudies from "../_partials/CaseStudies";
import LetUsBuild from "./_partials/LetUsBuild";
import OurServices from "./_partials/OurServices";
import ServicesHeroSection from "./_partials/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <OurServices />
      <LetUsBuild />
    </div>
  );
};
export default ServicesPage;
