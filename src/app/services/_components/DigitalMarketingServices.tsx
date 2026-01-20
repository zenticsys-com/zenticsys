import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";
const DigitalMarketingServices = () => {
  return (
    <section className="text-justify">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Digital Marketing Services
      </h2>
      <p className="text-gray-600 font-medium">
        Our Digital Marketing Services help businesses increase online
        visibility, attract targeted audiences, and drive measurable growth. We
        use data-driven strategies, SEO, social media marketing, content
        creation, and paid advertising to maximize brand reach and customer
        engagement. Our goal is to deliver consistent results and long-term
        digital success.
      </p>
      <div className="flex flex-col gap-3 font-semibold md:text-lg xl:text-2xl p-4 text-gray-900">
        <Link href={"#"} className="flex gap-3 items-center ">
          <CheckCircle className="text-primary" />
          <span>Search Engine Marketing (PPC)</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Social Media Marketing</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>E-Commerce Marketing</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Search Engine Optimization (White Level SEO)</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Content Marketing</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Conversion Rate Optimization</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Lead Generation Services</span>
        </Link>
        <Link href={"#"} className="flex gap-3 items-center">
          <CheckCircle className="text-primary" />
          <span>Local SEO & Maps Marketing</span>
        </Link>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
