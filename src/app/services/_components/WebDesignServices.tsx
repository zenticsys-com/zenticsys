import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const WebDesignServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
        Web Design Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Zenticsys provides professional website design and development services
        focused on performance, structure, and user experience. As a custom web
        design and web development company, we begin with requirement analysis
        and user research, followed by wireframing and UI design to define
        layout, structure, and content flow. After design validation, we move to
        structured frontend and backend development, ensuring responsive web
        design, secure integration, and performance optimization. From eCommerce
        website design to SaaS web platforms and web application development,
        every project is built with clean architecture, practical usability, and
        long-term maintainability in mind.
      </p>
      <div className="flex flex-col gap-3 font-semibold md:text-lg xl:text-2xl p-4 text-gray-900">
        <Link href={"#"} className="flex gap-3 items-center ">
          <CheckCircle className="text-primary" />
          <span>Custom Website Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Automotive Web Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>E-commerce Web Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Healthcare Website</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Real Estate Web Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Corporate Website Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Saas Web Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Website Redesign</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Fintech Web Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Manufacturing Website</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Web App Design</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>QA Consulting & Testing</span>
        </Link>
      </div>
    </section>
  );
};

export default WebDesignServices;
