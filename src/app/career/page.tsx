import CareerHeroSection from "@/app/career/_partials/CareerHeroSection";
import OpenPositions from "./_partials/OpenPositions";
import CallToAction from "./_partials/CallToAction";
import CompanyCulture from "./_partials/CompanyCulture";
import WhyWorkWithOus from "./_partials/WhyWorkWithOus";

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <CareerHeroSection />
      <WhyWorkWithOus />
      <OpenPositions />
      <CompanyCulture />
      <CallToAction />
    </div>
  );
};
export default CareerPage;
