import { Card, CardContent } from "@/components/ui/card";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  FaBuildingColumns,
  FaBusinessTime,
  FaCar,
  FaHeartPulse,
} from "react-icons/fa6";
import { IoLayersSharp, IoSettingsSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { PiHandHeartFill } from "react-icons/pi";

const OurIndustryExpertise = () => {
  /**- Data -**/
  const industries = [
    {
      icon: <FaCar className="w-8 h-8 text-primary" />,
      title: "Automotive",
      description:
        "Smart digital solutions for vehicle management, and connected car platforms that improve performance, safety, and customer experience.",
    },

    {
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-primary" />,
      title: "Fintech",
      description:
        "Advanced financial technology solutions including digital wallets, secure payment gateways, and banking integrations for scalable business growth.",
    },

    {
      icon: <MdShoppingCart className="w-8 h-8 text-primary" />,
      title: "E-commerce",
      description:
        "High-performance online stores with secure payments, inventory management, and user-friendly shopping experiences that boost sales and conversions.",
    },
    {
      icon: <FaHeartPulse className="w-8 h-8 text-primary" />,
      title: "HealthTech & MedTech",
      description:
        "Advanced healthcare technology solutions for patient management, remote monitoring, and secure medical data systems that improve care delivery.",
    },
    {
      icon: <FaBuildingColumns className="w-8 h-8 text-primary" />,
      title: "Real Estate & Construction Tech",
      description:
        "Smart digital solutions for property management, construction planning, and project tracking that improve efficiency and reduce operational costs.",
    },
    {
      icon: <FaBusinessTime className="w-8 h-8 text-primary" />,
      title: "Corporate / Business",
      description:
        "Scalable business technology platforms designed to streamline operations, enhance collaboration, and drive long-term organizational growth.",
    },
    {
      icon: <IoLayersSharp className="w-8 h-8 text-primary" />,
      title: "SaaS (Vertical SaaS)",
      description:
        "Industry-focused SaaS platforms built for scalability, performance, and security that help businesses automate workflows and grow faster.",
    },
    {
      icon: <IoSettingsSharp className="w-8 h-8 text-primary" />,
      title: "Manufacturing Software",
      description:
        "Smart manufacturing software solutions for production planning, inventory tracking, and process automation that improve efficiency and reduce costs.",
    },
    {
      icon: <PiHandHeartFill className="w-8 h-8 text-primary" />,
      title: "Non-profit",
      description:
        "Digital solutions for non-profit organizations including donation platforms, volunteer management, and community engagement tools that maximize social impact.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Specialized solutions across diverse industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-6">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIndustryExpertise;
