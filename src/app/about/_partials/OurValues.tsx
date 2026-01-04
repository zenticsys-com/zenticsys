import { Card, CardContent } from "@/components/ui/card";
import {
  LuAward as Award,
  LuHeart as Heart,
  LuShield as Shield,
  LuTarget as Target,
  LuUsers as Users,
  LuZap as Zap,
} from "react-icons/lu";
const OurValues = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation First",
      description:
        "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client Partnership",
      description:
        "We believe in building long-term partnerships with our clients, understanding their business deeply to deliver maximum value.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description:
        "Every project we deliver meets the highest standards of quality, performance, and reliability through rigorous testing and review processes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description:
        "Our success is built on the foundation of teamwork, open communication, and shared commitment to achieving exceptional results.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security & Trust",
      description:
        "We prioritize security and data protection in every solution we build, ensuring our clients can trust us with their most sensitive information.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Agile Delivery",
      description:
        "We use agile methodologies to deliver solutions quickly and efficiently while maintaining flexibility to adapt to changing requirements.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
