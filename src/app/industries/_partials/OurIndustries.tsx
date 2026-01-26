import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { IoLayersSharp, IoSettingsSharp } from "react-icons/io5";
import { LuCircleCheck as CheckCircle } from "react-icons/lu";
import { MdShoppingCart } from "react-icons/md";
import { PiHandHeartFill } from "react-icons/pi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  FaBuildingColumns,
  FaBusinessTime,
  FaCar,
  FaHeartPulse,
} from "react-icons/fa6";

const OurIndustries = () => {
  const industries = [
    {
      id: "automotive",
      icon: <FaCar className="w-8 h-8 text-primary" />,
      title: "Automotive",
      description:
        "Smart digital solutions for vehicle management, and connected car platforms that improve performance, safety, and customer experience.",
      services: [
        "Connected car platforms",
        "Fleet management systems",
        "Vehicle diagnostics & telematics",
        "Predictive maintenance solutions",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "fintech",
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-primary" />,
      title: "Fintech",
      description:
        "Advanced financial technology solutions including digital wallets, secure payment gateways, and banking integrations for scalable business growth.",
      services: [
        "Digital wallet development",
        "Secure payment gateway integration",
        "Banking & API integrations",
        "Fraud detection systems",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "ecommerce",
      icon: <MdShoppingCart className="w-8 h-8 text-primary" />,
      title: "E-commerce",
      description:
        "High-performance online stores with secure payments, inventory management, and user-friendly shopping experiences that boost sales and conversions.",
      services: [
        "Custom e-commerce platforms",
        "Payment & checkout optimization",
        "Inventory & order management",
        "Performance optimization",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "healthtech",
      icon: <FaHeartPulse className="w-8 h-8 text-primary" />,
      title: "HealthTech & MedTech",
      description:
        "Advanced healthcare technology solutions for patient management, remote monitoring, and secure medical data systems that improve care delivery.",
      services: [
        "Patient management systems",
        "Telemedicine platforms",
        "Remote health monitoring",
        "Secure medical data solutions",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "real-estate",
      icon: <FaBuildingColumns className="w-8 h-8 text-primary" />,
      title: "Real Estate & Construction Tech",
      description:
        "Smart digital solutions for property management, construction planning, and project tracking that improve efficiency and reduce operational costs.",
      services: [
        "Property management systems",
        "Construction project tracking",
        "CRM for real estate",
        "Workflow automation",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "corporate",
      icon: <FaBusinessTime className="w-8 h-8 text-primary" />,
      title: "Corporate / Business",
      description:
        "Scalable business technology platforms designed to streamline operations, enhance collaboration, and drive long-term organizational growth.",
      services: [
        "Enterprise software solutions",
        "Business process automation",
        "Internal dashboards & reporting",
        "Collaboration tools",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "saas",
      icon: <IoLayersSharp className="w-8 h-8 text-primary" />,
      title: "SaaS (Vertical SaaS)",
      description:
        "Industry-focused SaaS platforms built for scalability, performance, and security that help businesses automate workflows and grow faster.",
      services: [
        "Custom SaaS development",
        "Multi-tenant architecture",
        "Subscription & billing systems",
        "Cloud scaling & optimization",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "manufacturing",
      icon: <IoSettingsSharp className="w-8 h-8 text-primary" />,
      title: "Manufacturing Software",
      description:
        "Smart manufacturing software solutions for production planning, inventory tracking, and process automation that improve efficiency and reduce costs.",
      services: [
        "Production planning systems",
        "Inventory & supply chain tracking",
        "Process automation",
        "Manufacturing analytics",
      ],
      caseStudy: "Case study Title",
    },
    {
      id: "non-profit",
      icon: <PiHandHeartFill className="w-8 h-8 text-primary" />,
      title: "Non-profit",
      description:
        "Digital solutions for non-profit organizations including donation platforms, volunteer management, and community engagement tools that maximize social impact.",
      services: [
        "Donation & fundraising platforms",
        "Volunteer management systems",
        "Community engagement tools",
        "Impact reporting dashboards",
      ],
      caseStudy: "Case study Title",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <Link href={`#${industry.id}`}>
                  <h3 className=" text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-6">{industry.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Services:
                  </h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <Link href={`#${industry.caseStudy}`}>
                    <p className="text-sm text-gray-500 italic">
                      {industry.caseStudy}
                    </p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIndustries;
