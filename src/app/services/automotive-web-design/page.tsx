import OurPartnerships from "@/app/_partials/OurPartnerships";
import AutomotiveHeroSection from "./_partials/AutomotiveHeroSection";
import AutomotiveWebAccordion from "./_partials/AutomotiveWebAccordion";
import AutomotiveWebDesignBanner from "./_partials/AutomotiveWebDesignBanner";
import WhatsIncludedInPackege from "./_partials/WhatsIncludedInPackege";
import AutomlotiveCaseStudies from "./_partials/AutomlotiveCaseStudies";
import TypesOfAutomotiveBusinesses from "./_partials/TypesOfAutomotiveBusinesses";
import AutomotiveClientReviews from "./_partials/AutomotiveClientReviews";
import FAQSection from "./_partials/FAQSection";
import AutomotiveCtaSection from "./_partials/AutomotiveCtaSection";

const AutomotiveWebDesign = () => {
  return (
    <div>
      <AutomotiveHeroSection />
      <section className="bg-background-dark">
        <div className="w-full h-screen flex bg-amber-200 justify-center items-center">
          Slider
        </div>
      </section>
      <AutomotiveWebDesignBanner />
      <section className="bg-background-dark">
        <AutomotiveWebAccordion />
      </section>
      <OurPartnerships />
      <section className="bg-background-dark">
        <WhatsIncludedInPackege />
      </section>
      <TypesOfAutomotiveBusinesses />
      <section className="bg-background-dark">
        <AutomlotiveCaseStudies />
      </section>
      <AutomotiveClientReviews />
      <section className="bg-background-dark">
        <FAQSection />
      </section>
      <AutomotiveCtaSection />
    </div>
  );
};

export default AutomotiveWebDesign;
