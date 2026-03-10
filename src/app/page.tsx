import CallSchedule from "@/app/_partials/CallSchedule";
import ClientReviews from "@/app/_partials/ClientReviews";
import HeroSection from "@/app/_partials/HeroSection";
import OurIndustryExpertise from "@/app/_partials/OurIndustryExpertise";
import OurPartnerships from "@/app/_partials/OurPartnerships";
import TheTechnologyWeUse from "@/app/_partials/TheTechnologyWeUse";
import InsideZenticsys from "@/app/_partials/InsideZenticsys";
import SolutionsWeEngineer from "@/app/_partials/SolutionsWeEngineer";
import CaseStudies from "./_partials/CaseStudies";
import FAQSection from "./_partials/FAQSection";
import OurBlogs from "./_partials/OurBlogs";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurPartnerships />
      <div className="bg-background-dark">
        <InsideZenticsys />
      </div>
      <SolutionsWeEngineer />
      <div className="bg-background-dark">
        <OurIndustryExpertise />
      </div>
      <CaseStudies />
      <div className="bg-background-dark">
        <TheTechnologyWeUse />
      </div>
      <ClientReviews />
      <div className="bg-background-dark">
        <OurBlogs />
      </div>
      <FAQSection />
      <CallSchedule />
    </div>
  );
};
export default HomePage;
