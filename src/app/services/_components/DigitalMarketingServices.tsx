import { CheckCircle } from "@mui/icons-material";
import Link from "next/link";
const DigitalMarketingServices = () => {
  return (
    <section>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">
        Digital Marketing Services
      </h2>
      <p className="text-gray-600 font-medium text-justify">
        Our digital marketing services are built to deliver measurable business
        growth, not just traffic or impressions. We combine strategic marketing
        expertise with technology-driven execution to create digital growth
        systems designed around your industry and business goals. From search
        engine optimization and paid advertising to social media campaigns,
        e-commerce marketing, and conversion rate optimization, we develop
        data-backed strategies that attract qualified audiences and turn them
        into loyal customers. Our team focuses on research, competitor analysis,
        precise targeting, and continuous performance optimization to ensure
        every campaign generates real ROI. We implement advanced tracking
        systems, analytics dashboards, automation tools, and CRM integrations to
        provide complete performance visibility and long-term performance
        improvement. We don’t just run marketing campaigns; we build digital
        ecosystems that strengthen your brand, increase revenue, and position
        your business for consistent growth in competitive markets.
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
