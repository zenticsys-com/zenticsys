import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const UiUxDesignServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        UI/UX Design Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Our UI/UX Design Services focus on creating intuitive, visually
        appealing, and user-centered digital experiences. We design interfaces
        that improve usability, enhance customer engagement, and ensure seamless
        navigation across all devices. By combining modern design trends with
        user research and testing, we deliver experiences that drive
        satisfaction and conversions.
      </p>
      <div className="flex flex-col gap-3 font-semibold md:text-lg xl:text-2xl p-4 text-gray-900">
        <Link href={"#"} className="flex gap-3 items-center ">
          <CheckCircle className="text-primary" />
          <span>Website UI UX Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>SaaS UI Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>UX UI strategy consulting</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Mobile App UI Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>UX Research</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Dashboard & Admin Panel Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Website UX Redesign</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Product UX Design & Optimization</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Wireframe & UI Prototyping</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Design QA & Review</span>
        </Link>
      </div>
    </section>
  );
};

export default UiUxDesignServices;
