import CareerHerroSection from "@/app/career/_partials/CareerHerroSection";
import OpenPositions from "./_partials/OpenPositions";
import CallToAction from "./_partials/CallToAction";
import CompanyCulture from "./_partials/CompanyCulture";
import WhyWorkWithOus from "./_partials/WhyWorkWithOus";

const CareerPage = () => {
  return (
    <div className="min-h-screen">
      <CareerHerroSection />
      <WhyWorkWithOus />
      <OpenPositions />
      <CompanyCulture />
      <CallToAction />
    </div>
  );
};
export default CareerPage;
