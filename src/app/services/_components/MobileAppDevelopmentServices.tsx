import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const MobileAppDevelopmentServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Mobile App Development Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Zenticsys provides custom mobile app development and mobile application
        development services built on a clear, phase-based execution model. We
        start with detailed requirement analysis, user flow planning, and system
        architecture definition to ensure the foundation is technically sound
        before development begins. Our team then moves into mobile-first UI/UX
        design, followed by Android mobile application development and
        cross-platform mobile app development, depending on project
        requirements. We implement backend API integration, secure
        authentication, database structuring, and performance optimization
        alongside frontend development to ensure system consistency. Each
        application undergoes structured testing, device compatibility
        validation, and performance refinement before deployment. We build
        enterprise mobile app development solutions designed for stability,
        security, and real business usability, not just app store presence
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
