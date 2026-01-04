import { Card, CardContent } from "@mui/material";
import {
  LuBanknote as Banknote,
  LuBuilding as Building,
  LuCar as Car,
  LuGraduationCap as GraduationCap,
  LuHeart as Heart,
  LuShoppingCart as ShoppingCart,
} from "react-icons/lu";

const OurIndustryExpertise = () => {
  const industries = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Automotive",
      description: "Advanced solutions for the automotive industry",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Healthcare",
      description: "Innovative healthcare technology solutions",
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Real Estate",
      description: "Digital solutions for property management",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "E-commerce",
      description: "Comprehensive e-commerce platforms",
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: "Fintech",
      description: "Financial technology innovations",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Education",
      description: "Educational technology solutions",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Specialized solutions across diverse industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurIndustryExpertise;
