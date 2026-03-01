import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";
const DigitalMarketingServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Digital Marketing Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Our digital marketing services are designed to deliver measurable
        business growth, not just traffic or impressions. We combine strategic
        marketing expertise with technology-driven execution to build digital
        growth systems tailored to your industry and objectives. From search
        engine optimization and paid advertising to social media, e-commerce
        marketing, and conversion rate optimization, we implement data-driven
        strategies that attract qualified audiences and convert them into loyal
        customers. Through research, competitor analysis, precise targeting, and
        continuous optimization, we ensure strong ROI. Advanced tracking,
        analytics dashboards, automation tools, and CRM integrations provide
        full performance visibility and sustainable, long-term growth.
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
