import { Card, CardContent } from "@mui/material";
import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiShield,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built to meet your specific business requirements and objectives.",
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <FiCloud className="w-8 h-8 text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
    },
    {
      icon: <FiDatabase className="w-8 h-8 text-primary" />,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics solutions.",
    },
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
    },
    {
      icon: <FiZap className="w-8 h-8 text-primary" />,
      title: "Digital Transformation",
      description:
        "Complete digital transformation strategies to modernize your business operations.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">
            Comprehensive software solutions for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-108 transition-transform duration-300">
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
