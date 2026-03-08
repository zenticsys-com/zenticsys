import OurPartnerships from "@/app/_partials/OurPartnerships";
import CustomWebAccordion from "./_partials/CustomWebAccordion";
import CustomWebServices from "./_partials/CustomWebServices";
import CustomWebsiteDesignHeroSection from "./_partials/CustomWebsiteDesignHeroSection";
import OurCustomWebProcess from "./_partials/OurCustomWebProcess";
import WhyClientsWithUs from "./_partials/WhyClientsWithUs";
import WhyBestChoiceUs from "./_partials/WhyBestChoiceUs";

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
    </div>
  );
};

export default CustomWebsiteDesignPage;
