import Image from "next/image";
import WebDesignServices from "../_components/WebDesignServices";
import CustomSoftwareDevelopmentServices from "../_components/CustomSoftwareDevelopmentServices";

const OurServices = () => {
  return (
    <section className="to-white py-4 px-4 lg:px-2">
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
          <WebDesignServices />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 my-12">
        <div className="col-span-6 py-8 lg:max-h-[520px] w-full">
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
    </section>
  );
};

export default OurServices;
