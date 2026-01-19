import {
  FaCar,
  FaCloud,
  FaBuilding,
  FaHeartbeat,
  FaCreditCard,
  FaHome,
  FaTruck,
  FaProjectDiagram,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import { LuCircleCheck as CheckCircle } from "react-icons/lu";
const CustomSoftwareDevelopmentServices = () => {
  /**- Data -**/
  const softwareServices = [
    {
      icon: <FaCar className="w-9 h-9 text-primary" />,
      title: "Automotive Software Development",
      description:
        "Custom automotive software solutions designed to improve vehicle management, fleet tracking, and customer engagement. We build scalable systems that integrate seamlessly with modern automotive technologies and IoT platforms.",
      features: [
        "Fleet management systems",
        "Vehicle tracking solutions",
        "Dealer management software",
        "IoT integration",
      ],
      technologies: ["React", "Node.js", "Python", "AWS"],
    },
    {
      icon: <FaCloud className="w-9 h-9 text-primary" />,
      title: "SaaS Product Development",
      description:
        "End-to-end SaaS product development services from idea validation to scalable cloud deployment. We build secure, high-performance SaaS platforms optimized for growth and long-term success.",
      features: [
        "Multi-tenant architecture",
        "Subscription management",
        "Scalable cloud infrastructure",
        "User analytics dashboards",
      ],
      technologies: ["React", "Next.js", "Node.js", "Stripe"],
    },
    {
      icon: <FaBuilding className="w-9 h-9 text-primary" />,
      title: "Enterprise Software Development",
      description:
        "Enterprise-grade software solutions designed to streamline business operations, improve productivity, and ensure secure data management across large organizations.",
      features: [
        "ERP system development",
        "CRM integration",
        "Workflow automation",
        "Role-based access control",
      ],
      technologies: ["Java", ".NET", "Spring Boot", "PostgreSQL"],
    },
    {
      icon: <FaHeartbeat className="w-9 h-9 text-primary" />,
      title: "Healthcare Software Development",
      description:
        "Secure and compliant healthcare software solutions built for hospitals, clinics, and medical service providers with patient-focused user experiences.",
      features: [
        "Electronic Health Records (EHR)",
        "Telemedicine platforms",
        "Appointment scheduling",
        "HIPAA compliance support",
      ],
      technologies: ["Node.js", "React", "FHIR APIs", "PostgreSQL"],
    },
    {
      icon: <FaCreditCard className="w-9 h-9 text-primary" />,
      title: "FinTech Software Development",
      description:
        "High-security fintech software solutions designed to handle financial transactions, digital payments, and data protection with regulatory compliance.",
      features: [
        "Payment gateway integration",
        "Secure authentication systems",
        "Fraud detection tools",
        "Transaction management",
      ],
      technologies: ["React", "Node.js", "Stripe", "AWS"],
    },
    {
      icon: <FaHome className="w-9 h-9 text-primary" />,
      title: "Real Estate & PropTech Software",
      description:
        "Smart real estate software solutions built to manage property listings, automate workflows, and enhance customer experience for brokers and property managers.",
      features: [
        "Property management systems",
        "Lead management tools",
        "Virtual tour integration",
        "CRM integration",
      ],
      technologies: ["React", "Next.js", "Firebase", "Google Maps API"],
    },
    {
      icon: <FaTruck className="w-9 h-9 text-primary" />,
      title: "Logistics & Supply Chain Software",
      description:
        "Custom logistics and supply chain software designed to improve shipment tracking, warehouse management, and operational efficiency.",
      features: [
        "Shipment tracking systems",
        "Warehouse management",
        "Route optimization",
        "Inventory tracking",
      ],
      technologies: ["Node.js", "React", "MongoDB", "AWS"],
    },
    {
      icon: <FaProjectDiagram className="w-9 h-9 text-primary" />,
      title: "API Design & Development",
      description:
        "Robust API design and development services to connect applications, enable integrations, and ensure smooth data communication between systems.",
      features: [
        "RESTful API development",
        "GraphQL APIs",
        "API security implementation",
        "Third-party integrations",
      ],
      technologies: ["Node.js", "Express", "GraphQL", "Postman"],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Custom Software Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softwareServices.map((service, index) => (
            <Card
              key={index}
              className="h-full group hover:shadow-lg shadow-primary/10"
            >
              <CardContent className="p-5">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <div className="md:h-9 text-gray-600 mb-6 relative">
                  <p className="transition-all hover:line-clamp-none md:line-clamp-2 duration-300 hover:pb-2 hover:block hover:absolute hover:top-0 hover:left-0 hover:bg-white ">
                    {service.description}
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="bg-gray-200"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareDevelopmentServices;
