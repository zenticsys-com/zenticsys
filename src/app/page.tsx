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
      <section className="bg-background">
        <HeroSection />
        <OurPartnerships />
      </section>
      <section className="bg-background-dark">
        <InsideZenticsys />
      </section>
      <section className="bg-background">
        <SolutionsWeEngineer />
      </section>
      <section className="bg-background-dark">
        <OurIndustryExpertise />
      </section>
      <section className="bg-background">
        <CaseStudies />
      </section>
      <section className="bg-background-dark">
        <TheTechnologyWeUse />
      </section>
      <section className="bg-background">
        <ClientReviews />
      </section>
      <section className="bg-background-dark">
        <OurBlogs />
      </section>
      <section className="bg-background">
        <FAQSection />
      </section>
      <CallSchedule />
    </div>
  );
};
export default HomePage;
