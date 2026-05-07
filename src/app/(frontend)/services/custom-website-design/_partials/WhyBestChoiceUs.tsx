import { Card, CardContent } from "@/components/ui/card";
import { FaRegLightbulb } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbTargetArrow } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiChartLineUpBold } from "react-icons/pi";

type FeatureType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const WhyBestChoiceUs = () => {
  const features: FeatureType[] = [
    {
      icon: <FaRegLightbulb size={35} />,
      title: "Custom Web Designs For Your Brand",
      description:
        "Every website is designed to match your brand identity, goals, customer expectations, visual style, messaging, positioning, trust, and long-term business growth.",
    },
    {
      icon: <FiUsers size={35} />,
      title: "Fast, Precise, And Future-Ready Development",
      description:
        "Modern development practices ensure speed, reliability, scalability, security, clean code, strong performance, smooth functionality, and readiness for future expansion.",
    },
    {
      icon: <TbTargetArrow size={35} />,
      title: "Strategy-Driven For Tangible Results",
      description:
        "Each decision is guided by business goals, user needs, market opportunities, conversions, measurable outcomes, and sustainable long-term digital success.",
    },
    {
      icon: <MdSupportAgent size={35} />,
      title: "Dedicated Support Every Step Of The Way",
      description:
        "Clear communication and dependable support are provided from planning to launch, updates, improvements, problem-solving, and continued business growth",
    },
    {
      icon: <HiOutlineDevicePhoneMobile size={35} />,
      title: "Flawless Experiences Across All Devices",
      description:
        "Responsive websites deliver smooth browsing experiences on desktop, tablet, mobile devices, fast loading, easy navigation, and better engagement.",
    },
    {
      icon: <PiChartLineUpBold size={35} />,
      title: "Transparent Process And Timelines",
      description:
        "Clear milestones, regular updates, realistic timelines, accountability, progress visibility, better planning, and smooth project delivery from start to finish.",
    },
  ];

  return (
    <section className="py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-230 mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-primary">Zenticsys </span>Is the Best
            Choice
            <br />
            for Custom Website Design?
          </h2>
          <p className="text-lg text-gray-600">
            Zenticsys delivers custom website design, custom web development,
            and business strategy to create websites that look professional,
            perform smoothly, and help businesses generate real growth online.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {features?.map((feature, index) => (
            <div key={index} className="p-4 border-b border-b-primary/50">
              <p className="mb-4 text-primary"> {feature?.icon}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature?.title}
              </h3>
              <p className="text-gray-600">{feature?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBestChoiceUs;
