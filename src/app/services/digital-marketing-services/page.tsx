import Image from "next/image";
import DigitalMarketingServices from "../_components/DigitalMarketingServices";

const DigitalMarketingServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 py-12">
      <div className="order-1 lg:order-2 col-span-6 w-full">
        <Image
          src={"/assets/images/Digital_marketing.jpg"}
          alt="image"
          width={570}
          height={380}
          className="w-full h-full"
        />
      </div>
      <div className="order-2 lg:order-1 col-span-6 ">
        <DigitalMarketingServices />
      </div>
    </div>
  );
};

export default DigitalMarketingServicesPage;
