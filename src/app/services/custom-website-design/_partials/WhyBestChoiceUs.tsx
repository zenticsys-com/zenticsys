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
        "Zenticsys creates custom web designs that perfectly embody your brand’s identity and vision.",
    },
    {
      icon: <FiUsers size={35} />,
      title: "Fast, Precise, And Future-Ready Development",
      description:
        "We combine speed, precision, and scalability to build future-ready websites.",
    },
    {
      icon: <TbTargetArrow size={35} />,
      title: "Strategy-Driven For Tangible Results",
      description:
        "We design with purpose and build websites that align with your goals.",
    },
    {
      icon: <MdSupportAgent size={35} />,
      title: "Dedicated Support Every Step Of The Way",
      description:
        "Zenticsys supports you at every stage, from beginning to end.",
    },
    {
      icon: <HiOutlineDevicePhoneMobile size={35} />,
      title: "Flawless Experiences Across All Devices",
      description:
        "Our websites deliver smooth and responsive performance across devices.",
    },
    {
      icon: <PiChartLineUpBold size={35} />,
      title: "Transparent Process And Timelines",
      description:
        "We provide clear communication and transparency throughout development.",
    },
  ];

  return (
    <section className="py-12 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12  max-w-230 mx-auto">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-primary"> Zenticsys </span> is Your Best
            Choice
            <br />
            for Website Design?
          </h2>
          <p className="text-lg text-gray-600">
            We deliver custom software development, SaaS solutions, and
            industry-specific digital platforms engineered for scalability,
            security, and measurable business growth.
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
