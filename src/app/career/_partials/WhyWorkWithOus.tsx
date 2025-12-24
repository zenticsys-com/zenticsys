import { Card, CardContent } from "@/components/ui/card";
import {
  LuAward as Award,
  LuCoffee as Coffee,
  LuDollarSign as DollarSign,
  LuHeart as Heart,
  LuHouse as Home,
  LuLaptop as Laptop,
} from "react-icons/lu";

const WhyWorkWithOus = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#ef3d23]" />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs for you and your family.",
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#ef3d23]" />,
      title: "Latest Technology",
      description:
        "Work with cutting-edge technology and tools. We provide top-tier equipment and software licenses.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#ef3d23]" />,
      title: "Flexible Work",
      description:
        "Hybrid work options, flexible hours, and remote work opportunities to maintain work-life balance.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#ef3d23]" />,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, conference attendance, certifications, and career development programs.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#ef3d23]" />,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries, performance bonuses, equity participation, and comprehensive benefits.",
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#ef3d23]" />,
      title: "Great Culture",
      description:
        "Collaborative environment, team events, catered lunches, and a fun, inclusive workplace culture.",
    },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-xl text-gray-600">
            We believe in creating an environment where talented people can
            thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithOus;
