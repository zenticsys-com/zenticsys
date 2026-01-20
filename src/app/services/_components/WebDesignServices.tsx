import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";

const WebDesignServices = () => {
  return (
    <section className="text-justify">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Web Design Services
      </h2>
      <p className="text-gray-600 font-medium">
        Our Web Design Services focus on creating visually appealing, fully
        responsive, and user-friendly websites that represent your brand
        professionally. We combine modern UI/UX principles with performance
        optimization to ensure fast loading speeds, smooth navigation, and
        higher engagement. Our goal is to deliver scalable, secure, and
        conversion-focused designs that help your business grow online.
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
