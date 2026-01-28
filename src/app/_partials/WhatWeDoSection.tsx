import { Card, CardContent } from "@/components/ui/card";
import { FaCode } from "react-icons/fa6";
import {
  FiCode,
  FiLayers,
  FiPenTool,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";

const WhatWeDoSection = () => {
  /**_Data_**/
  const services = [
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: "Website design & Development",
      description:
        "We create user-friendly and scalable websites that help your brand stand out and convert visitors into customers.",
    },
    {
      icon: <FiPenTool className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description:
        "Creating clean and effective UI/UX designs that help users navigate easily and boost customer satisfaction.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Custom Software Development",
      description:
        "We build scalable, secure, and custom software solutions tailored to your business needs and workflows.",
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps built using modern technologies for speed, security, and scalability.",
    },
    {
      icon: <FiLayers className="w-8 h-8 text-primary" />,
      title: "SaaS Design",
      description:
        "We design modern, scalable, and user-friendly SaaS interfaces that improve usability and drive user adoption.",
    },
    {
      icon: <FiTarget className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description:
        "Complete digital marketing services including SEO, ads, content marketing, and social media growth.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="md:text-lg text-xl text-gray-600">
            Comprehensive software solutions for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
