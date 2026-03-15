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

const WhatsIncludedInPackege = () => {
  /**- Data -**/
  const customWebPackages = [
    {
      icon: <FaCar className="w-8 h-8 text-primary" />,
      title: "Professional Website Design",
      description:
        "We develop automotive software design, including vehicle management systems, dealer platforms, automotive SaaS, and connected car marketplace applications.",
    },

    {
      icon: <FaMoneyCheckAlt className="w-8 h-8 text-primary" />,
      title: "Free Domain + Hosting integration",
      description:
        "We build secure fintech software solutions, payment systems, digital wallets, banking integrations, financial SaaS systems, and compliant transaction management development.",
    },

    {
      icon: <MdShoppingCart className="w-8 h-8 text-primary" />,
      title: "Automotive Branding",
      description:
        "We create e-commerce website development with secure payments, inventory management systems, scalable architecture, and conversion-focused online stores.",
    },
    {
      icon: <FaHeartPulse className="w-8 h-8 text-primary" />,
      title: "Website Content Writing",
      description:
        "We deliver healthcare software development solutions covering AI-powered diagnostics, patient management systems, telemedicine platforms, medical SaaS, and secure clinical data infrastructure.",
    },
    {
      icon: <FaBuildingColumns className="w-8 h-8 text-primary" />,
      title: "SEO Optimization",
      description:
        "We build real estate software design, property management platforms, construction management systems, and growth-ready digital marketplace applications.",
    },
    {
      icon: <FaBusinessTime className="w-8 h-8 text-primary" />,
      title: "Vehicle Listing",
      description:
        "We design enterprise software development solutions, business automation systems, CRM platforms, and modern corporate technology infrastructure.",
    },
    {
      icon: <IoLayersSharp className="w-8 h-8 text-primary" />,
      title: "Google Business Profile Setup",
      description:
        "We design logistics software development, inventory systems, and supply chain management platforms that improve tracking, automation, and operational visibility.",
    },
    {
      icon: <IoSettingsSharp className="w-8 h-8 text-primary" />,
      title: "Social Media Setup & Optimization",
      description:
        "We develop manufacturing software solutions for production planning, inventory management, supply chain automation, and real-time operational monitoring systems, improving efficiency.",
    },
    {
      icon: <PiHandHeartFill className="w-8 h-8 text-primary" />,
      title: "Website Maintenance",
      description:
        "We develop nonprofit software solutions, donation management systems, CRM platforms, volunteer management tools, and community engagement applications supporting long-term fundraising operations.",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-230 mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            What’s included in
            <span className="text-primary">Custom Website Design</span> Service
            Package
          </h2>
          <p className="text-lg text-gray-600">
            We deliver Title: What’s included in Custom Website Design Service
            Package digital platforms engineered for scalability, security, and
            measurable business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customWebPackages?.map((item, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <span>{item?.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item?.title}
                </h3>
                <p className="text-gray-600">{item?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncludedInPackege;
