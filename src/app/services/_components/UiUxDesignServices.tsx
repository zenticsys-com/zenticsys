import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const UiUxDesignServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        UI/UX Design Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Zenticsys delivers UI/UX design services using a research-driven,
        structured design process. We begin by understanding user behavior,
        business goals, and system requirements before defining interaction
        flows and information architecture. Our process includes UX research,
        wireframing, user journey mapping, and interface prototyping to validate
        usability before development begins. We focus on clean visual hierarchy,
        intuitive navigation, responsive layouts, and consistent design systems
        across web and mobile platforms.
        <span className="mt-3 block">
          After design validation, we conduct usability testing and design QA to
          ensure clarity, accessibility, and practicality in the real world.
          Whether it’s SaaS UI design, dashboard interfaces, mobile app UI, or
          product UX optimization, every design decision is made to improve
        </span>
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
