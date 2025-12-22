"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Button, Card, CardContent, Chip } from "@mui/material";
import NextLink from "next/link";

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
import HeroSection from "./_partials/HeroSection";
import OurServices from "./_partials/OurServices";

const ServicesPage = () => {
  // const services = [
  //   {
  //     icon: <Code className="w-12 h-12 text-primary" />,
  //     title: "Custom Software Development",
  //     description:
  //       "Tailored solutions built to meet your specific business requirements and objectives. We create scalable, maintainable software that grows with your business.",
  //     features: [
  //       "Full-stack development",
  //       "API integration",
  //       "Legacy system modernization",
  //       "Performance optimization",
  //     ],
  //     technologies: ["React", "Node.js", "Python", ".NET"],
  //   },
  //   {
  //     icon: <Smartphone className="w-12 h-12 text-primary" />,
  //     title: "Mobile App Development",
  //     description:
  //       "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences and drive engagement.",
  //     features: [
  //       "iOS & Android development",
  //       "Cross-platform solutions",
  //       "App Store optimization",
  //       "Offline functionality",
  //     ],
  //     technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
  //   },
  //   {
  //     icon: <Cloud className="w-12 h-12 text-primary" />,
  //     title: "Cloud Solutions",
  //     description:
  //       "Scalable cloud infrastructure and migration services for modern businesses looking to leverage the power of cloud computing.",
  //     features: [
  //       "Cloud migration",
  //       "Infrastructure as Code",
  //       "Auto-scaling",
  //       "Cost optimization",
  //     ],
  //     technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
  //   },
  //   {
  //     icon: <Database className="w-12 h-12 text-primary" />,
  //     title: "Data Analytics & BI",
  //     description:
  //       "Transform your data into actionable insights with advanced analytics solutions and business intelligence platforms.",
  //     features: [
  //       "Data warehousing",
  //       "Real-time analytics",
  //       "Predictive modeling",
  //       "Custom dashboards",
  //     ],
  //     technologies: ["Tableau", "Power BI", "Python", "SQL"],
  //   },
  //   {
  //     icon: <Shield className="w-12 h-12 text-primary" />,
  //     title: "Cybersecurity Solutions",
  //     description:
  //       "Comprehensive security solutions to protect your digital assets and data from evolving cyber threats.",
  //     features: [
  //       "Security audits",
  //       "Penetration testing",
  //       "Compliance management",
  //       "Incident response",
  //     ],
  //     technologies: ["SIEM", "Zero Trust", "IAM", "Encryption"],
  //   },
  //   {
  //     icon: <Zap className="w-12 h-12 text-primary" />,
  //     title: "Digital Transformation",
  //     description:
  //       "Complete digital transformation strategies to modernize your business operations and improve efficiency.",
  //     features: [
  //       "Process automation",
  //       "Digital strategy",
  //       "Change management",
  //       "Technology roadmap",
  //     ],
  //     technologies: ["RPA", "AI/ML", "IoT", "Blockchain"],
  //   },
  //   {
  //     icon: <Globe className="w-12 h-12 text-primary" />,
  //     title: "Web Development",
  //     description:
  //       "Modern, responsive web applications that provide seamless user experiences across all devices and platforms.",
  //     features: [
  //       "Responsive design",
  //       "Progressive Web Apps",
  //       "E-commerce platforms",
  //       "CMS development",
  //     ],
  //     technologies: ["React", "Vue.js", "WordPress", "Shopify"],
  //   },
  //   {
  //     icon: <Users className="w-12 h-12 text-primary" />,
  //     title: "IT Consulting",
  //     description:
  //       "Strategic technology consulting to help you make informed decisions about your IT infrastructure and digital initiatives.",
  //     features: [
  //       "Technology assessment",
  //       "Architecture design",
  //       "Project planning",
  //       "Risk management",
  //     ],
  //     technologies: ["TOGAF", "ITIL", "Agile", "DevOps"],
  //   },
  //   {
  //     icon: <Settings className="w-12 h-12 text-primary" />,
  //     title: "System Integration",
  //     description:
  //       "Seamless integration of disparate systems and applications to create unified, efficient business processes.",
  //     features: [
  //       "API development",
  //       "Data synchronization",
  //       "Workflow automation",
  //       "Legacy integration",
  //     ],
  //     technologies: ["REST APIs", "GraphQL", "Microservices", "ESB"],
  //   },
  // ];

  const caseStudies = [
    {
      title: "Healthcare Management System",
      client: "MedTech Solutions",
      challenge:
        "Streamline patient management and reduce administrative overhead",
      solution:
        "Developed a comprehensive healthcare management platform with patient portals, appointment scheduling, and electronic health records.",
      results: [
        "50% reduction in admin time",
        "30% improvement in patient satisfaction",
        "99.9% system uptime",
      ],
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "Web App", "Mobile"],
    },
    {
      title: "E-commerce Platform Redesign",
      client: "RetailMax",
      challenge:
        "Modernize outdated e-commerce platform to improve user experience and increase sales",
      solution:
        "Complete platform redesign with modern UI/UX, improved performance, and advanced analytics capabilities.",
      results: [
        "75% increase in conversion rate",
        "40% faster page load times",
        "60% growth in mobile sales",
      ],
      image:
        "https://images.unsplash.com/photo-1758876202983-c36dd5019142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODk5OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["E-commerce", "UI/UX", "Performance"],
    },
    {
      title: "Financial Analytics Dashboard",
      client: "InvestPro",
      challenge:
        "Create real-time financial analytics platform for investment professionals",
      solution:
        "Built a sophisticated analytics dashboard with real-time data processing, advanced charting, and custom reporting.",
      results: [
        "Real-time data processing",
        "90% faster report generation",
        "Advanced predictive analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU4OTEzNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Fintech", "Analytics", "Dashboard"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <OurServices />

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real-world examples of our successful projects
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        variant="outlined"
                        className="border-primary text-primary"
                      />
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">
                      CLIENT:{" "}
                    </span>
                    <span className="text-sm text-gray-600">
                      {study.client}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Results:
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let us Build Your Solution Together
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Our
            expert team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              component={NextLink}
              href="/schedule"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Start Your Project
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={NextLink}
              href="/about"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServicesPage;
