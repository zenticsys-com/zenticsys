import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const MobileAppDevelopmentServices = () => {
  return (
    <section className="text-justify">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Mobile App Development Services
      </h2>
      <p className="text-gray-600 font-medium">
        Our Mobile App Development Services deliver high-quality, secure, and
        scalable mobile applications for Android and iOS platforms. We focus on
        performance, usability, and seamless user experience to ensure your app
        meets business goals. From concept and design to deployment and
        maintenance, we provide end-to-end development solutions.
      </p>
      <div className="flex flex-col gap-3 font-semibold md:text-lg xl:text-2xl p-4 text-gray-900">
        <Link href={"#"} className="flex gap-3 items-center ">
          <CheckCircle className="text-primary" />
          <span>Android App Development </span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>iOS App Development </span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Mobile App UI UX Design</span>
        </Link>
      </div>
    </section>
  );
};

export default MobileAppDevelopmentServices;
