import Image from "next/image";
import WebDesignServices from "../_components/WebDesignServices";
import CustomSoftwareDevelopmentServices from "../_components/CustomSoftwareDevelopmentServices";
import UiUxDesignServices from "../_components/UiUxDesignServices";
import MobileAppDevelopmentServices from "../_components/MobileAppDevelopmentServices";
import DigitalMarketingServices from "../_components/DigitalMarketingServices";

const OurServices = () => {
  return (
    <section className="to-white py-4 px-4 lg:px-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="order-1 lg:order-2 col-span-6 py-8 lg:max-h-[710px] w-full">
          <Image
            src={"/assets/images/Image_3.jpg"}
            alt="image"
            width={570}
            height={380}
            className="w-full h-full"
          />
        </div>
        <div className="order-2 lg:order-1 col-span-6 ">
          <WebDesignServices />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="col-span-6 py-8 lg:max-h-[550px] w-full">
          <Image
            src={"/assets/images/Image_5.jpg"}
            alt="image"
            width={670}
            height={680}
            className="w-full h-full shadow-lg"
          />
        </div>
        <div className=" col-span-6 ">
          <CustomSoftwareDevelopmentServices />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="order-1 lg:order-2 col-span-6 py-8 lg:max-h-[700px] w-full">
          <Image
            src={"/assets/images/Image_3.jpg"}
            alt="image"
            width={570}
            height={380}
            className="w-full h-full"
          />
        </div>
        <div className="order-2 lg:order-1 col-span-6 ">
          <UiUxDesignServices />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="col-span-6 py-8 lg:max-h-[400px] w-full">
          <Image
            src={"/assets/images/Image_2.jpg"}
            alt="image"
            width={670}
            height={680}
            className="w-full h-full shadow-lg"
          />
        </div>
        <div className=" col-span-6 ">
          <MobileAppDevelopmentServices />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="order-1 lg:order-2 col-span-6 py-8 lg:max-h-[520px] w-full">
          <Image
            src={"/assets/images/Image_3.jpg"}
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
    </section>
  );
};

export default OurServices;
