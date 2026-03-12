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
  description: string;
};
const OurCustomWebProcess = () => {
  /**_Data_**/
  /**_Data_**/
  const processData: ProcessDataType[] = [
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "Ui Design",
      description:
        "Our UI design process focuses on creating clean, modern, and user-friendly interfaces. We design layouts that improve usability, enhance visual appeal, and deliver a smooth user experience across all devices.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "Website Design",
      description:
        "We craft professional website designs tailored to your brand identity and audience. Our designs focus on clarity, creativity, and conversion to help your business stand out online.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description:
        "Our developers transform designs into fast, secure, and scalable websites using modern technologies. We ensure your site is responsive, optimized, and performs smoothly on all devices.",
    },
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "Content Writing",
      description:
        "We create clear and engaging content that communicates your message effectively. Our content writing helps improve user engagement, SEO performance, and builds trust with your audience.",
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      description:
        "Before launch, our QA team tests every feature of your website. We ensure responsiveness, functionality, and performance so users receive a flawless experience.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "Branding logo Design",
      description:
        "We design unique and memorable logos that represent your brand identity. Our branding process ensures your business leaves a strong and lasting impression.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-primary" />,
      title: "Website Launch",
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
          <p className="text-lg text-gray-600">
            Get a custom web page design that's not just beautiful, it's
            written, designed, and developed to bring in more business.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"> */}
        <div className="grid grid-cols-12 gap-4">
          {processData?.map((item, index) => (
            <Card
              key={index}
              // className="h-full hover:shadow-lg shadow-primary/10 duration-300 group"
              className={`h-full col-span-12 md:col-span-6 xl:col-span-4 hover:shadow-lg shadow-primary/10 duration-300 group
              ${index === processData.length - 1 ? "" : ""}
              `}
            >
              <CardContent className="p-8">
                <div className="mb-6 transition-transform duration-300">
                  <span> {item?.icon}</span>
                </div>
                <h3 className="text-xl uppercase font-semibold text-gray-900 hover:text-primary transition duration-300">
                  {item?.title}
                </h3>

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
