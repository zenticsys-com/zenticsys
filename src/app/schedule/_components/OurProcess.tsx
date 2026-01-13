import {
  LuMessageSquare as MessageSquare,
  LuTarget as Target,
  LuUsers as Users,
  LuZap as Zap,
} from "react-icons/lu";

import { Card, CardContent } from "@/components/ui/card";

const OurProcess = () => {
  const processSteps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Initial Consultation",
      description:
        "We discuss your project requirements, goals, and challenges to understand your needs.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Solution Design",
      description:
        "Our experts create a tailored solution proposal with timeline and cost estimates.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Assembly",
      description:
        "We assign the right team members with the expertise needed for your project.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Development & Delivery",
      description:
        "Agile development process with regular updates and transparent communication.",
    },
  ];
  return (
    <div>
      <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Our Process
          </h3>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="">{step.icon}</div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurProcess;
