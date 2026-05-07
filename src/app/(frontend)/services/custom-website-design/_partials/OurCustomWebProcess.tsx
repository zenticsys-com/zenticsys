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
        "Clear interfaces improve usability, navigation, consistency, accessibility, engagement, trust, responsiveness, user flow, overall digital experience, retention, satisfaction, and smoother customer interactions daily.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "Website Design",
      description:
        "Professional layouts strengthen branding, increase engagement, build trust, improve navigation, support conversions, create strong online presence, credibility, and lasting visitor impressions.",
    },
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description:
        "Fast coding ensures security, responsive layouts, smooth performance, reliable functionality, scalability, clean structure, long-term website stability, efficiency, and dependable user experiences.",
    },
    {
      icon: <FaPenNib className="w-8 h-8 text-primary" />,
      title: "Content Writing",
      description:
        "Clear messaging communicates value, builds trust, improves engagement, supports SEO, guides visitors, encourages meaningful customer action, clarity, and stronger conversions online.",
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      description:
        "Detailed testing checks functionality, responsiveness, speed, usability, compatibility, navigation, forms, performance, launch readiness, reliability, and smooth user interactions everywhere.",
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary" />,
      title: "Branding logo Design",
      description:
        "Memorable logos strengthen identity, improve recognition, reflect values, build trust, support consistent brand presence, professionalism, uniqueness, and market differentiation effectively.",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-primary" />,
      title: "Website Launch",
      description:
        "Smooth deployment includes final checks, performance monitoring, error prevention, live readiness, strong foundation for future growth, confidence, and stable operations.",
    },
  ];

  return (
    <section className="py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Custom Web Design and Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We follow a clear process from planning and design to custom web
            development, testing, and launch. Creating websites that reflect
            your brand, improve user experience, and drive measurable results.
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
