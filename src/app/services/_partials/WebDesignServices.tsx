import {
  FaBug,
  FaBuilding,
  FaCar,
  FaCreditCard,
  FaDesktop,
  FaHeartbeat,
  FaHome,
  FaIndustry,
  FaLaptopCode,
  FaLayerGroup,
  FaShoppingCart,
  FaSyncAlt,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import { LuCircleCheck as CheckCircle } from "react-icons/lu";
const WebDesignServices = () => {
  /**- Data -**/
  const webDesignServices = [
    {
      icon: <FaLaptopCode className="w-9 h-9 text-primary" />,
      title: "Custom Website Design",
      description:
        "Custom website design solutions tailored to your business goals, brand identity, and target audience. We create visually appealing, fast-loading, and conversion-focused websites that deliver exceptional user experiences across all devices.",
      features: [
        "Brand-focused UI/UX design",
        "Responsive layouts",
        "Performance optimization",
        "SEO-friendly structure",
      ],
      technologies: ["Figma", "React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FaCar className="w-9 h-9 text-primary" />,
      title: "Automotive Web Design",
      description:
        "High-performance automotive websites built to showcase vehicles, manage inventory, and generate quality leads.",
      features: [
        "Vehicle listing system",
        "Advanced search filters",
        "Lead management integration",
        "Mobile-friendly design",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      icon: <FaShoppingCart className="w-9 h-9 text-primary" />,
      title: "E-commerce Web Design",
      description:
        "Conversion-driven e-commerce solutions designed to increase sales and improve customer engagement.",
      features: [
        "Secure payment gateway",
        "Product management",
        "Cart & checkout optimization",
        "Order tracking system",
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "React"],
    },
    {
      icon: <FaHeartbeat className="w-9 h-9 text-primary" />,
      title: "Healthcare Website",
      description:
        "Healthcare websites designed with security, compliance, and patient experience in mind.",
      features: [
        "Appointment booking",
        "HIPAA compliance support",
        "Patient portal integration",
        "Secure data handling",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "FHIR APIs"],
    },
    {
      icon: <FaHome className="w-9 h-9 text-primary" />,
      title: "Real Estate Web Design",
      description:
        "Feature-rich real estate platforms built to display property listings and manage inquiries.",
      features: [
        "Property listing management",
        "Map integration",
        "Virtual tour support",
        "Lead capture forms",
      ],
      technologies: ["React", "Google Maps API", "Firebase", "Next.js"],
    },
    {
      icon: <FaBuilding className="w-9 h-9 text-primary" />,
      title: "Corporate Website Design",
      description:
        "Professional corporate websites designed to strengthen your brand presence and credibility.",
      features: [
        "Corporate branding design",
        "CMS integration",
        "Multi-page layouts",
        "Performance optimization",
      ],
      technologies: ["WordPress", "React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <FaLayerGroup className="w-9 h-9 text-primary" />,
      title: "SaaS Web Design",
      description:
        "Modern SaaS web design focused on usability, onboarding experience, and product engagement.",
      features: [
        "User onboarding flows",
        "Dashboard UI design",
        "Subscription UI",
        "Scalable structure",
      ],
      technologies: ["React", "Next.js", "Stripe", "Supabase"],
    },
    {
      icon: <FaSyncAlt className="w-9 h-9 text-primary" />,
      title: "Website Redesign",
      description:
        "Complete website redesign services to modernize outdated platforms and improve performance.",
      features: [
        "UI/UX improvement",
        "Speed optimization",
        "SEO upgrades",
        "Mobile responsiveness",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Figma", "Lighthouse"],
    },
    {
      icon: <FaCreditCard className="w-9 h-9 text-primary" />,
      title: "Fintech Web Design",
      description:
        "Secure fintech platforms designed with strong UI/UX and compliance-focused architecture.",
      features: [
        "Secure authentication",
        "Payment gateway integration",
        "Transaction dashboard",
        "Compliance-ready UI",
      ],
      technologies: ["React", "Node.js", "Stripe", "AWS"],
    },
    {
      icon: <FaIndustry className="w-9 h-9 text-primary" />,
      title: "Manufacturing Website",
      description:
        "Manufacturing websites optimized for industrial product catalogs and B2B lead generation.",
      features: [
        "Product catalog system",
        "B2B inquiry forms",
        "Multi-language support",
        "High performance UI",
      ],
      technologies: ["Next.js", "Headless CMS", "React", "Node.js"],
    },
    {
      icon: <FaDesktop className="w-9 h-9 text-primary" />,
      title: "Web App Design",
      description:
        "Interactive and scalable web applications designed for performance and usability.",
      features: [
        "Dashboard UI",
        "Real-time data",
        "Role-based access",
        "API integration",
      ],
      technologies: ["React", "Next.js", "Firebase", "REST APIs"],
    },
    {
      icon: <FaBug className="w-9 h-9 text-primary" />,
      title: "QA Consulting & Testing",
      description:
        "End-to-end quality assurance services to ensure product stability and performance.",
      features: [
        "Manual testing",
        "Automation testing",
        "Performance testing",
        "Security testing",
      ],
      technologies: ["Selenium", "Cypress", "Jest", "Postman"],
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Web Design Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {webDesignServices.map((service, index) => (
            <Card
              key={index}
              className="h-full group hover:shadow-lg shadow-primary/10"
            >
              <CardContent className="p-5">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl  font-semibold text-gray-900 mb-4">
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

export default WebDesignServices;
