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
  /**_Data_**/
  const processData: ProcessDataType[] = [
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "UI ",
      subtitle: "DESIGN",
      description:
        "Our UI design process focuses on creating clean, modern, and user-friendly interfaces. We design layouts that improve usability, enhance visual appeal, and deliver a smooth user experience across all devices.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "DESIGN",
      description:
        "We craft professional website designs tailored to your brand identity and audience. Our designs focus on clarity, creativity, and conversion to help your business stand out online.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "DEVELOPMENT",
      description:
        "Our developers transform designs into fast, secure, and scalable websites using modern technologies. We ensure your site is responsive, optimized, and performs smoothly on all devices.",
    },
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "CONTENT",
      subtitle: "WRITING",
      description:
        "We create clear and engaging content that communicates your message effectively. Our content writing helps improve user engagement, SEO performance, and builds trust with your audience.",
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-primary" />,
      title: "QUALITY",
      subtitle: "ASSURANCE",
      description:
        "Before launch, our QA team tests every feature of your website. We ensure responsiveness, functionality, and performance so users receive a flawless experience.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "BRANDING",
      subtitle: "LOGO DESIGN",
      description:
        "We design unique and memorable logos that represent your brand identity. Our branding process ensures your business leaves a strong and lasting impression.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-primary" />,
      title: "WEBSITE",
      subtitle: "LAUNCH",
      description:
        "After final testing, your website goes live. We ensure a smooth launch process and provide support to make sure everything works perfectly for your audience.",
    },
  ];

  return (
    <section className="py-12 bg-background-dark">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {processData?.map((item, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg shadow-primary/10 duration-300 group"
              //             className={`h-full hover:shadow-lg shadow-primary/10 duration-300 group
              // ${index === processData.length - 2 ? "hidden md:block md:border-none hover:shadow-none " : ""}
              // `}
            >
              <CardContent className="p-8">
                <div className="mb-6 transition-transform duration-300">
                  {item?.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900  hover:text-primary transition duration-300">
                  {item?.title}
                </h3>
                <h4 className="font-normal mb-4">{item?.subtitle}</h4>
                <p className="text-gray-600 ">{item?.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCustomWebProcess;
