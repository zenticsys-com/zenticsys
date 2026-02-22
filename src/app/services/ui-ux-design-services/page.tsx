import Image from "next/image";
import UiUxDesignServices from "../_components/UiUxDesignServices";

const UiUxDesignSerevicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6 py-12">
      <div className="order-1 lg:order-2 col-span-6 py-8 lg:max-h-[600px] w-full">
        <Image
          src={"/assets/images/Ui_Ux_design_img.jpg"}
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
  );
};

export default UiUxDesignSerevicesPage;
