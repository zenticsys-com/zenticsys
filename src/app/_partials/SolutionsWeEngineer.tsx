import { Card, CardContent } from "@/components/ui/card";
import { FaCode } from "react-icons/fa6";
import {
  FiCode,
  FiLayers,
  FiPenTool,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";

/**- Data type -**/
type ServicePropsType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const SolutionsWeEngineer = () => {
  /**_Services Data_**/
  const services: ServicePropsType[] = [
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: "Website Design & Development",
      description:
        "As a website design and development company, we deliver responsive web design, custom web development, e-commerce website development, and web application development services tailored for performance, scalability, and business growth.	",
    },
    {
      icon: <FiPenTool className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description:
        "Our UI/UX design services focus on user interface design, UX strategy, and digital product design for web applications and SaaS platforms. As a user interface design company, we create intuitive, scalable experiences that improve usability, engagement, and product performance.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Custom Software Development",
      description:
        "As a custom software development company, we deliver scalable SaaS software development, enterprise software solutions, and MVP development, building secure, high-performance applications designed for complex business requirements and long-term growth.",
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description:
        "We build reliable mobile applications for iOS and Android, combining native and cross-platform development with strong architecture, performance optimization, and security to deliver scalable apps that support real business growth.",
    },
    {
      icon: <FiLayers className="w-8 h-8 text-primary" />,
      title: "SaaS Design & Development",
      description:
        "We develop scalable SaaS platforms that turn business ideas into reliable Software as a Service products, combining structured product design, UI design, efficient SaaS management principles, and performance-focused SaaS software development architecture.",
    },
    {
      icon: <FiTarget className="w-8 h-8 text-primary" />,
      title: "360 Digital Marketing Solution",
      description:
        "We deliver best digital marketing strategies combining SEO, paid advertising, content marketing, analytics, and performance optimization to build brand authority, generate qualified leads, increase conversions, and drive sustainable long-term business growth.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solutions We Engineer
          </h2>
          <p className="md:text-lg text-xl text-gray-600">
            Strategic design and development services built to power modern
            businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services?.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 transition-transform duration-300">
                  {service?.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-primary transition duration-300">
                  {service?.title}
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

export default SolutionsWeEngineer;
