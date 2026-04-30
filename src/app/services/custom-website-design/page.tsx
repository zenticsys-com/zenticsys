import CustomWebAccordion from "./_partials/CustomWebAccordion";
import CustomWebServices from "./_partials/CustomWebServices";
import CustomWebsiteDesignHeroSection from "./_partials/CustomWebsiteDesignHeroSection";
import OurCustomWebProcess from "./_partials/OurCustomWebProcess";
import WhyBestChoiceUs from "./_partials/WhyBestChoiceUs";
import CustomWebsiteDesignBanner from "./_partials/CustomWebsiteDesignBanner";
import CaseStudies from "@/app/_partials/CaseStudies";
import ClientReviews from "@/app/_partials/ClientReviews";

import CustomWebsiteDesignCta from "./_partials/CustomWebsiteDesignCta";
import OurPartnerships from "@/app/_partials/OurPartnerships";
import FAQSection from "./_partials/FAQSection";

const CustomWebsiteDesignPage = () => {
  return (
    <div>
      <CustomWebsiteDesignHeroSection />
      <CustomWebServices />
      <CustomWebAccordion />
      <OurCustomWebProcess />
      <OurPartnerships />
      <WhyBestChoiceUs />
      <CustomWebsiteDesignBanner />
      <CaseStudies />
      <section className="mx-auto bg-background-dark">
        <ClientReviews />
      </section>
      <FAQSection />
      <CustomWebsiteDesignCta />
    </div>
  );
};

export default CustomWebsiteDesignPage;
