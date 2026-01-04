import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@mui/material";
import Image from "next/image";
import { LuCar as Car, LuCircleCheck as CheckCircle } from "react-icons/lu";

const AutomotiveIndustrySolutions = () => {
  const automotiveDetails = {
    title: "Automotive Industry Solutions",
    subtitle: "Driving Innovation in Connected Mobility",
    description:
      "The automotive industry is undergoing a digital transformation with connected vehicles, autonomous driving, and smart mobility solutions. We help automotive companies leverage technology to create safer, more efficient, and more connected transportation experiences.",
    image:
      "https://images.unsplash.com/photo-1603090067590-a9a0f0fa6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg4ODc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    solutions: [
      {
        title: "Connected Vehicle Platforms",
        description:
          "End-to-end platforms for vehicle connectivity, remote monitoring, and over-the-air updates.",
        benefits: [
          "Real-time vehicle diagnostics",
          "Remote software updates",
          "Predictive maintenance",
          "Enhanced safety features",
        ],
      },
      {
        title: "Fleet Management Systems",
        description:
          "Comprehensive fleet management solutions for commercial and enterprise vehicle operations.",
        benefits: [
          "Route optimization",
          "Driver behavior monitoring",
          "Fuel efficiency tracking",
          "Maintenance scheduling",
        ],
      },
      {
        title: "Autonomous Driving Support",
        description:
          "Advanced driver assistance systems and autonomous vehicle technology integration.",
        benefits: [
          "Sensor data processing",
          "Machine learning algorithms",
          "Safety validation",
          "Regulatory compliance",
        ],
      },
    ],
  };
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Car className="w-8 h-8 text-primary mr-3" />
              <Chip
                label="Featured Industry"
                variant="outlined"
                className="border-primary text-primary"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {automotiveDetails.title}
            </h2>
            <h3 className="text-xl text-primary font-semibold mb-6">
              {automotiveDetails.subtitle}
            </h3>
            <p className="text-lg text-gray-600">
              {automotiveDetails.description}
            </p>
          </div>
          <div>
            <div className="w-full h-auto ">
              <Image
                src={automotiveDetails.image}
                alt="image"
                width={570}
                height={380}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {automotiveDetails.solutions.map((solution, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 " />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomotiveIndustrySolutions;
