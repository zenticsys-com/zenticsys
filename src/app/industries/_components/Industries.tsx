import { Chip } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card";
import {
  LuBanknote as Banknote,
  LuBriefcase as Briefcase,
  LuBuilding as Building,
  LuCar as Car,
  LuCircleCheck as CheckCircle,
  LuFactory as Factory,
  LuGraduationCap as GraduationCap,
  LuHeart as Heart,
  LuPlane as Plane,
  LuShoppingCart as ShoppingCart,
} from "react-icons/lu";
const Industries = () => {
  /**- Data -**/
  const industries = [
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "Automotive",
      description:
        "Advanced solutions for the automotive industry including connected car platforms, fleet management, and autonomous vehicle technologies.",
      services: [
        "Connected car platforms",
        "Fleet management systems",
        "Telematics solutions",
        "Autonomous driving support",
      ],
      technologies: ["IoT", "Edge Computing", "AI/ML", "Real-time Analytics"],
      caseStudy:
        "AutoConnect Pro - Connected vehicle platform serving 100K+ vehicles",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Healthcare",
      description:
        "Innovative healthcare technology solutions that improve patient outcomes and streamline medical operations.",
      services: [
        "Electronic Health Records",
        "Telemedicine platforms",
        "Medical device integration",
        "Healthcare analytics",
      ],
      technologies: [
        "HIPAA Compliance",
        "HL7 FHIR",
        "Cloud Security",
        "Mobile Health",
      ],
      caseStudy: "MediFlow - Comprehensive healthcare management platform",
    },
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: "Real Estate",
      description:
        "Digital solutions for property management, real estate transactions, and smart building technologies.",
      services: [
        "Property management systems",
        "Virtual tours",
        "CRM solutions",
        "Smart building integration",
      ],
      technologies: ["VR/AR", "IoT Sensors", "Blockchain", "Mobile Apps"],
      caseStudy: "PropTech Suite - Complete real estate management solution",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "E-commerce & Retail",
      description:
        "Comprehensive e-commerce platforms and retail solutions that drive sales and enhance customer experiences.",
      services: [
        "E-commerce platforms",
        "Inventory management",
        "POS systems",
        "Customer analytics",
      ],
      technologies: [
        "Microservices",
        "CDN",
        "Payment Gateways",
        "Recommendation Engines",
      ],
      caseStudy: "RetailMax - Omnichannel retail platform with 2M+ users",
    },
    {
      icon: <Banknote className="w-10 h-10 text-primary" />,
      title: "Financial Services",
      description:
        "Secure financial technology solutions including banking platforms, payment systems, and investment tools.",
      services: [
        "Banking platforms",
        "Payment processing",
        "Trading systems",
        "Regulatory compliance",
      ],
      technologies: [
        "Blockchain",
        "Cryptography",
        "Risk Management",
        "API Security",
      ],
      caseStudy: "FinanceFlow - Next-generation trading platform",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      title: "Education",
      description:
        "Educational technology solutions that enhance learning experiences and streamline educational administration.",
      services: [
        "Learning management systems",
        "Student portals",
        "Assessment tools",
        "Virtual classrooms",
      ],
      technologies: [
        "Learning Analytics",
        "Video Streaming",
        "Progressive Web Apps",
        "Accessibility",
      ],
      caseStudy:
        "EduTech Platform - Online learning platform for 50K+ students",
    },
    {
      icon: <Plane className="w-10 h-10 text-primary" />,
      title: "Travel & Hospitality",
      description:
        "Digital solutions for travel booking, hospitality management, and customer experience optimization.",
      services: [
        "Booking platforms",
        "Hotel management systems",
        "Travel planning tools",
        "Loyalty programs",
      ],
      technologies: [
        "Reservation Systems",
        "GDS Integration",
        "Mobile Apps",
        "Customer Analytics",
      ],
      caseStudy: "TravelPro - Comprehensive travel management platform",
    },
    {
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: "Manufacturing",
      description:
        "Industry 4.0 solutions including smart manufacturing, supply chain optimization, and predictive maintenance.",
      services: [
        "Manufacturing execution systems",
        "Supply chain management",
        "Quality control systems",
        "Predictive maintenance",
      ],
      technologies: [
        "Industrial IoT",
        "Machine Learning",
        "Digital Twins",
        "Automation",
      ],
      caseStudy: "SmartFactory - IoT-enabled manufacturing optimization",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: "Professional Services",
      description:
        "Business solutions for consulting, legal, accounting, and other professional service organizations.",
      services: [
        "Project management tools",
        "Client portals",
        "Billing systems",
        "Document management",
      ],
      technologies: [
        "Workflow Automation",
        "Document Security",
        "Time Tracking",
        "CRM Integration",
      ],
      caseStudy: "ProService Hub - Professional services management platform",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <Card key={index} className="h-full hover:shadow-xl group">
              <CardContent className="p-4">
                <div className="mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
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

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="bg-gray-200"
                      />
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 italic">
                    {industry.caseStudy}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
