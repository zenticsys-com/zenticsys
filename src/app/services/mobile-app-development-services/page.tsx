import Image from "next/image";
import MobileAppDevelopmentServices from "../_components/MobileAppDevelopmentServices";

const MobileAppDevelopmentServicesPage = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 py-12">
        <div className="col-span-6 w-full">
          <Image
            src={"/assets/images/Mobile_app_development_img.jpg"}
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
    </section>
  );
};

export default MobileAppDevelopmentServicesPage;
