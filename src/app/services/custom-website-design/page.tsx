import OurPartnerships from "@/app/_partials/OurPartnerships";
import CustomWebAccordion from "./_partials/CustomWebAccordion";
import CustomWebServices from "./_partials/CustomWebServices";
import CustomWebsiteDesignHeroSection from "./_partials/CustomWebsiteDesignHeroSection";
import OurCustomWebProcess from "./_partials/OurCustomWebProcess";
import WhyClientsWithUs from "./_partials/WhyClientsWithUs";
import WhyBestChoiceUs from "./_partials/WhyBestChoiceUs";
import CustomWebsiteDesignBanner from "./_partials/CustomWebsiteDesignBanner";
import CaseStudies from "@/app/_partials/CaseStudies";
import ClientReviews from "@/app/_partials/ClientReviews";
import FAQSection from "../_partials/FAQSection";
import CustomWebsiteDesignCta from "./_partials/CustomWebsiteDesignCta";

const CustomWebsiteDesignPage = () => {
  return (
    <div>
      <CustomWebsiteDesignHeroSection />
      <CustomWebServices />
      <CustomWebAccordion />
      <OurCustomWebProcess />
      <OurPartnerships />
      <WhyClientsWithUs />
      <WhyBestChoiceUs />
      <CustomWebsiteDesignBanner />
      <CaseStudies />
      <ClientReviews />
      <FAQSection />
      <CustomWebsiteDesignCta />
    </div>
  );
};

export default CustomWebsiteDesignPage;
