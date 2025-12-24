import AutomotiveIndustrySolutions from "@/app/industries/_partials/AutomotiveIndustrySolutions";
import ClientSuccessStories from "@/app/industries/_partials/ClientSuccessStories";
import IndustriesWeServe from "@/app/industries/_partials/IndustriesWeServe";
import SeeYourIndustry from "@/app/industries/_partials/SeeYourIndustry";
const IndustriesPage = () => {
  return (
    <div>
      <IndustriesWeServe />
      <AutomotiveIndustrySolutions />
      <ClientSuccessStories />
      <SeeYourIndustry />
    </div>
  );
};

export default IndustriesPage;
