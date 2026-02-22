import Image from "next/image";
import React from "react";
import CustomSoftwareDevelopmentServices from "../_components/CustomSoftwareDevelopmentServices";

const CustomDevelopmentServicesPage = () => {
  return (
    <section className="to-white py-4 px-4 lg:px-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 py-12">
        <div className="order-1 lg:order-2 col-span-6 py-8 lg:max-h-[710px] w-full">
          <Image
            src={"/assets/images/Image_2.jpg"}
            alt="image"
            width={570}
            height={380}
            className="w-full h-full"
          />
        </div>
        <div className="order-2 lg:order-1 col-span-6 ">
          <CustomSoftwareDevelopmentServices />
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopmentServicesPage;
