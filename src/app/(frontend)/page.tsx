import type { Metadata } from "next";

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
import { getHomePage } from "@/lib/homePage";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  const page = await getHomePage();

  return {
    title: page.seo?.title || undefined,
    description: page.seo?.description || undefined,
  };
};

const HomePage = async () => {
  const page = await getHomePage();

  return (
    <div className="min-h-screen">
      <section className="bg-background">
        <HeroSection content={page.hero} />
        <OurPartnerships content={page.partnerships} />
      </section>
      <section className="bg-background-dark">
        <InsideZenticsys content={page.inside} />
      </section>
      <section className="bg-background">
        <SolutionsWeEngineer content={page.solutions} />
      </section>
      <section className="bg-background-dark">
        <OurIndustryExpertise content={page.industries} />
      </section>
      <section className="bg-background">
        <CaseStudies content={page.caseStudies} />
      </section>
      <section className="bg-background-dark">
        <TheTechnologyWeUse />
      </section>
      <section className="bg-background">
        <ClientReviews />
      </section>
      <section className="bg-background-dark">
        <OurBlogs content={page.blogPreview} />
      </section>
      <section className="bg-background">
        <FAQSection content={page.faq} />
      </section>
      <CallSchedule content={page.cta} />
    </div>
  );
};
export default HomePage;
