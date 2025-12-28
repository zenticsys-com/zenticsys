import { Card, CardContent, Chip } from "@mui/material";

import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import {
  LuCircleCheck as CheckCircle,
  LuCloud as Cloud,
  LuCode as Code,
  LuDatabase as Database,
  LuGlobe as Globe,
  LuSettings as Settings,
  LuShield as Shield,
  LuSmartphone as Smartphone,
  LuUsers as Users,
  LuZap as Zap,
} from "react-icons/lu";
import ServicesHeroSection from "./ServicesHeroSection";
const OurServices = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built to meet your specific business requirements and objectives. We create scalable, maintainable software that grows with your business.",
      features: [
        "Full-stack development",
        "API integration",
        "Legacy system modernization",
        "Performance optimization",
      ],
      technologies: ["React", "Node.js", "Python", ".NET"],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and drive engagement.",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "App Store optimization",
        "Offline functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses looking to leverage the power of cloud computing.",
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Cost optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Analytics & BI",
      description:
        "Transform your data into actionable insights with advanced analytics solutions and business intelligence platforms.",
      features: [
        "Data warehousing",
        "Real-time analytics",
        "Predictive modeling",
        "Custom dashboards",
      ],
      technologies: ["Tableau", "Power BI", "Python", "SQL"],
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions to protect your digital assets and data from evolving cyber threats.",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance management",
        "Incident response",
      ],
      technologies: ["SIEM", "Zero Trust", "IAM", "Encryption"],
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Digital Transformation",
      description:
        "Complete digital transformation strategies to modernize your business operations and improve efficiency.",
      features: [
        "Process automation",
        "Digital strategy",
        "Change management",
        "Technology roadmap",
      ],
      technologies: ["RPA", "AI/ML", "IoT", "Blockchain"],
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description:
        "Modern, responsive web applications that provide seamless user experiences across all devices and platforms.",
      features: [
        "Responsive design",
        "Progressive Web Apps",
        "E-commerce platforms",
        "CMS development",
      ],
      technologies: ["React", "Vue.js", "WordPress", "Shopify"],
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "IT Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions about your IT infrastructure and digital initiatives.",
      features: [
        "Technology assessment",
        "Architecture design",
        "Project planning",
        "Risk management",
      ],
      technologies: ["TOGAF", "ITIL", "Agile", "DevOps"],
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "System Integration",
      description:
        "Seamless integration of disparate systems and applications to create unified, efficient business processes.",
      features: [
        "API development",
        "Data synchronization",
        "Workflow automation",
        "Legacy integration",
      ],
      technologies: ["REST APIs", "GraphQL", "Microservices", "ESB"],
    },
  ];
  return (
    <div>
      <ServicesHeroSection />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

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
    </div>
  );
};

export default OurServices;
