import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const CustomSoftwareDevelopmentServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 ">
        Custom Software Development Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        We deliver custom software development through a structured and
        engineering-driven process. We begin with detailed requirement analysis
        and business workflow understanding to define clear system architecture
        and technical direction. After establishing the foundation, our team
        designs database structures, API layers, and secure authentication
        systems before proceeding with backend and frontend development. We
        build each module in phases, carefully test them, and integrate them
        systematically to ensure stability and performance.
        <span className="mt-3 block ">
          We focus on clean code practices, role-based access control, optimized
          database management, and scalable infrastructure. From SaaS product
          development to enterprise software systems and API design, every
          solution is engineered for practical business use, not just feature
          completion.
        </span>
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
