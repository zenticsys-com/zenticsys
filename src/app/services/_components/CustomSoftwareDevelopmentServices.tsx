import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const CustomSoftwareDevelopmentServices = () => {
  return (
    <section className="text-justify">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
        Custom Software Development Services
      </h2>
      <p className="text-gray-600 font-medium">
        Our Custom Software Development Services provide tailored solutions
        designed to meet your unique business requirements. We build secure,
        scalable, and high-performance software that improves operational
        efficiency and streamlines workflows. From planning and development to
        deployment and maintenance, we ensure reliable solutions that support
        long-term business growth.
      </p>
      <div className="flex flex-col gap-3 font-semibold md:text-lg xl:text-2xl p-4 text-gray-900">
        <Link href={"#"} className="flex gap-3 items-center ">
          <CheckCircle className="text-primary" />
          <span>Automotive Software Development</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>SaaS Product Development</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Enterprise Software Development</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Healthcare Software Development</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>FinTech Software Development</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Real Estate & PropTech Software</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Logistics & Supply Chain Software</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>API Design & Development</span>
        </Link>
      </div>
    </section>
  );
};

export default CustomSoftwareDevelopmentServices;
