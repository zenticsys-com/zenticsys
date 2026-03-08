import { Card, CardContent } from "@/components/ui/card";

import {
  FaBullseye,
  FaPenNib,
  FaCode,
  FaTrophy,
  FaRocket,
} from "react-icons/fa";

/**- Data type -**/
type ProcessDataType = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};
const OurCustomWebProcess = () => {
  /**_Data_**/
  const processData: ProcessDataType[] = [
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "DESIGN",
      description:
        "A professional custom web design starts with good research. Our team studies your audience, competitors, and goals to create a design that fits your business perfectly.",
    },
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "CONTENT",
      subtitle: "WRITING",
      description:
        "Helping visitors understand your services quickly is key to success. Our team writes clear, engaging, and persuasive content that connects with your audience.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "DEVELOPMENT",
      description:
        "Our development process converts design into a fully functional website using modern technologies, strong typography, and engaging visuals.",
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-primary" />,
      title: "QUALITY",
      subtitle: "ASSURANCE",
      description:
        "During QA, we test every part of your website to ensure performance, responsiveness, and the best user experience before launch.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "LAUNCH",
      description:
        "Once testing is complete, your website goes live. We ensure everything runs smoothly and provide ongoing support when needed.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Custom Web Design And Development Process
          </h2>
          <p className="md:text-lg text-xl text-gray-600">
            Get a custom web page design that's not just beautiful, it's
            written, designed, and developed to bring in more business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processData?.map((item, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6 transition-transform duration-300">
                  {item?.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900  hover:text-primary transition duration-300">
                  {item?.title}
                </h2>
                <h4 className="text-lg font-normal mb-4 ">{item?.subtitle}</h4>
                <p className="text-gray-600">{item?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomWebProcess;
